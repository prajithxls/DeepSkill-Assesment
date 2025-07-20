using Confluent.Kafka;
using System;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "chat-group", 
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();

        consumer.Subscribe("chat-topic");
        Console.WriteLine("--- Listening for chat messages. Press Ctrl+C to exit. ---");

        var cts = new CancellationTokenSource();
        Console.CancelKeyPress += (_, e) => {
            e.Cancel = true; 
            cts.Cancel();
        };

        try
        {
            while (true)
            {
                var consumeResult = consumer.Consume(cts.Token);
                Console.WriteLine(consumeResult.Message.Value);
            }
        }
        catch (OperationCanceledException)
        {
        
            consumer.Close();
            Console.WriteLine("--- Consumer stopped. ---");
        }
    }
}