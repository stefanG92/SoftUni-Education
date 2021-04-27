import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.IntStream;

public class FindEvensOrOdds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] ranges = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        String typeNumbers = scanner.nextLine();

        if(evenOrOdd(typeNumbers)){
            evenNumbersInRange(ranges);
        }else {
            oddNumbersInRange(ranges);
        }

    }
    public static void evenNumbersInRange(int[] ranges) {

        for (int i = ranges[0]; i <= ranges[1]; i++) {
            if(getEven(i)){
                System.out.print(i + " ");
            }
        }
    }
    public static void oddNumbersInRange(int[] ranges) {

        for (int i = ranges[0]; i <= ranges[1]; i++) {
            if(getOdd(i)){
                System.out.print(i + " ");
            }
        }

    }
    public static boolean getEven(int number){
        Predicate<Integer> isEven = num -> num % 2 == 0;
        return isEven.test(number);
    }
    public static boolean getOdd(int number){
        Predicate<Integer> isOdd = num -> num % 2 != 0;
        return isOdd.test(number);
    }
    public static boolean evenOrOdd(String typeNumbers){
        Predicate<String> type = str -> str.equals("even");
        return type.test(typeNumbers);
    }
}
