import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Function;
import java.util.stream.IntStream;

public class SumNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        Function<String, IntStream> getIntStream = str -> Arrays.stream(str.split(", "))
                .mapToInt(Integer::parseInt);

        Function<String,Long> getCount = str -> {
            return getIntStream.apply(input).count();
        };
        Function<String,Integer> getSum = str -> {
            return getIntStream.apply(input).sum();
        };


        System.out.println("Count = " + getCount.apply(input));
        System.out.println("Sum = " + getSum.apply(input));
    }
}
