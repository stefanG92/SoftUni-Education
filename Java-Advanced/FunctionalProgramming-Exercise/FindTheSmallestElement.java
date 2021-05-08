import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class FindTheSmallestElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Function<String, Integer> parseInput = str -> Integer.parseInt(str);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(e -> parseInput.apply(e)).collect(Collectors.toList());

        Function<List<Integer>, Integer> getMinIndexValue = list ->
                list.lastIndexOf(list.stream().min(Integer::compare).get());

        Consumer<Integer> printIndex = num -> System.out.println(num);

        printIndex.accept(getMinIndexValue.apply(numbers));
    }
}
