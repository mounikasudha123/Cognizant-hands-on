public class implementation {

    // Recursive method to calculate future value
    public static double forecast(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.08; // 8%
        int years = 5;

        double futureValue = forecast(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n", years, futureValue);
    }
}