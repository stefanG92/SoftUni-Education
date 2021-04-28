import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class KnightsHonor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(KnightsHonor::printNames);
    }
    public static void printNames (String name){
        Consumer<String> print = e -> System.out.println("Sir " + e  );
       print.accept(name);
    }
}
