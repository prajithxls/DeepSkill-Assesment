using System;

class Program {
    static void Main(string[] args) {
        Console.Write("Enter current value: ");
        double currentValue = double.Parse(Console.ReadLine());

        Console.Write("Enter annual growth rate (e.g., 0.1 for 10%): ");
        double rate = double.Parse(Console.ReadLine());

        Console.Write("Enter number of years to forecast: ");
        int years = int.Parse(Console.ReadLine());

        double forecastRecursive = PredictFutureRecursive(years, currentValue, rate);
        Console.WriteLine($"\n[Recursive] Forecasted value after {years} years: {forecastRecursive:F2}");

        double forecastIterative = PredictFutureIterative(years, currentValue, rate);
        Console.WriteLine($"[Iterative] Forecasted value after {years} years: {forecastIterative:F2}");
    }

    static double PredictFutureRecursive(int year, double value, double rate) {
        if (year == 0) return value;
        return PredictFutureRecursive(year - 1, value, rate) * (1 + rate);
    }

    static double PredictFutureIterative(int year, double value, double rate) {
        for (int i = 0; i < year; i++) {
            value *= (1 + rate);
        }
        return value;
    }
}
