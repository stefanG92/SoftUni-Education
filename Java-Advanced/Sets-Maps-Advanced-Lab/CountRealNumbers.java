import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class CountRealNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] numbers = scanner.nextLine().split("\\s+");

        Map<Double, Integer> occurrencesElements = new LinkedHashMap<>();

        for (int i = 0; i < numbers.length; i++) {
            double currentNumber = Double.parseDouble(numbers[i]);
            if (!occurrencesElements.containsKey(currentNumber)) {
                occurrencesElements.put(currentNumber, 1);
            } else {
                occurrencesElements.put(currentNumber, occurrencesElements.get(currentNumber) + 1);
            }

        }

        for (Map.Entry<Double, Integer> number : occurrencesElements.entrySet()) {
            System.out.printf("%.1f -> %d%n",number.getKey(),number.getValue());
        }

    }
}
