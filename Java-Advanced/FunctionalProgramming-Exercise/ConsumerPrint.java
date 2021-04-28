import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class ConsumerPrint {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] names = scanner.nextLine().split("\\s+");

        getName(names);


    }

    public static void printNames(String name) {
        Consumer<String> printer = n -> System.out.println(n);
        printer.accept(name);
    }
    public static void getName(String[] names){
        Arrays.stream(names)
                .forEach(ConsumerPrint::printNames);
    }
}
