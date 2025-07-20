using Confluent.Kafka;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var config = new ProducerConfig { BootstrapServers = "localhost:9092" };

        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("Enter your name:");
        var name = Console.ReadLine();
        Console.WriteLine($"--- Chatting as {name}. Type 'quit' to exit. ---");

        string message;
        while ((message = Console.ReadLine()) != "quit")
        {
            try
            {
                var deliveryResult = await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = $"{name}: {message}" });
                Console.WriteLine($"Sent: '{deliveryResult.Value}'");
            }
            catch (ProduceException<Null, string> e)
            {
                Console.WriteLine($"Delivery failed: {e.Error.Reason}");
            }
        }
    }
}