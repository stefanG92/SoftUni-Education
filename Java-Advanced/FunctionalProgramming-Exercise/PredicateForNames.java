import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateForNames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int namesLength = Integer.parseInt(scanner.nextLine());
        Predicate<String> isLessOrEqual = str -> str.length() <= namesLength;

        List<String> names = Arrays.stream(scanner.nextLine().split("\\s+"))
                .filter(n -> isLessOrEqual.test(n))
                .collect(Collectors.toList());
        Arrays.stream(names.toArray()).forEach(e -> System.out.println(e));






    }
}
