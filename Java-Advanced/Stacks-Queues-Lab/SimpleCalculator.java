import java.lang.reflect.Array;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");
        ArrayDeque<Integer> numbers = new ArrayDeque<>();

        for (int i = 0; i < input.length; i++) {

            String current = input[i];

            if (Character.isDigit(input[i].charAt(0))) {
                numbers.push(Integer.parseInt(input[i]));
            } else {
                int leftNumber = numbers.isEmpty()
                        ? numbers.pop()
                        : numbers.peek();
                int rightNumber = Integer.parseInt(input[++i]);


                int result = current.equals("+")
                        ? leftNumber + rightNumber
                        : leftNumber - rightNumber;



                numbers.push(result);

            }

        }
        System.out.println(numbers.peek());
    }
}
