using Confluent.Kafka;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KafkaWinFormsChatApp
{
    public partial class Form1 : Form
    {
        private IProducer<Null, string> _producer;
        private IConsumer<Ignore, string> _consumer;
        private CancellationTokenSource _cts;

        public Form1()
        {
            InitializeComponent();
            InitializeKafka();
            StartConsumer();
        }

        private void InitializeKafka()
        {
            var producerConfig = new ProducerConfig { BootstrapServers = "localhost:9092" };
            _producer = new ProducerBuilder<Null, string>(producerConfig).Build();

            var consumerConfig = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "winforms-chat-group-" + Guid.NewGuid(),
                AutoOffsetReset = AutoOffsetReset.Earliest,
                EnableAutoCommit = true
            };
            _consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
        }

        private void StartConsumer()
        {
            _cts = new CancellationTokenSource();
            _consumer.Subscribe("chat-topic");

            Task.Run(() =>
            {
                try
                {
                    while (!_cts.Token.IsCancellationRequested)
                    {
                        var result = _consumer.Consume(_cts.Token);
                        Invoke((MethodInvoker)delegate {
                            rtbChatHistory.AppendText(result.Message.Value + Environment.NewLine);
                        });
                    }
                }
                catch (OperationCanceledException)
                {
                    _consumer.Close();
                }
            });
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMessage.Text) || string.IsNullOrWhiteSpace(txtUserName.Text))
            {
                MessageBox.Show("Please enter your name and a message.");
                return;
            }

            var message = $"{txtUserName.Text}: {txtMessage.Text}";
            try
            {
                await _producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = message });
                txtMessage.Clear();
                txtMessage.Focus();
            }
            catch (ProduceException<Null, string> ex)
            {
                MessageBox.Show($"Failed to send message: {ex.Error.Reason}");
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            _cts?.Cancel();
            _producer?.Dispose();
            _consumer?.Dispose();
        }
    }
}
