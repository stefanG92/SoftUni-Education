import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(n -> Integer.parseInt(n))
                .toArray();
        int evenSum = 0;
        int oddSum = 0;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 == 0) {
                evenSum += numbers[i];
            } else {
                oddSum += numbers[i];
            }
        }

        System.out.println(evenSum - oddSum);

    }
}
