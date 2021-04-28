import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class ReverseAndExclude {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int divisibleNumber = Integer.parseInt(scanner.nextLine());

        Predicate<Integer> areDivisible = num -> num % divisibleNumber != 0;

        Function<int[],int[]> getNotDivisible = arr ->
                Arrays.stream(arr).filter(e -> areDivisible.test(e)).toArray();

        Consumer<int[]> printNumbers = arr -> {
           for (int i = arr.length - 1; i >= 0; i--) {
                System.out.print(arr[i] + " ");
            }
        };

       numbers = getNotDivisible.apply(numbers);
        printNumbers.accept(numbers);


    }
}
