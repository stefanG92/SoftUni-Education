import java.util.Arrays;
import java.util.Scanner;
import java.util.Set;
import java.util.function.Function;

public class CustomMinFunction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Function<int[],Integer> getMinNumber = num -> Arrays.stream(num).min().getAsInt();

        int[] number = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        System.out.println(getMinNumber.apply(number));

    }
}
