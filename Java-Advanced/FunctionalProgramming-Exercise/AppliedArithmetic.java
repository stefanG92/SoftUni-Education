import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;

public class AppliedArithmetic {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        String command = scanner.nextLine();

         // Add 1 for each element in array
        Function<int[],int[]> addOne = arr -> Arrays.stream(arr).map(e -> e += 1).toArray();

        // Multiply elements from the array with 2
        Function<int[],int[]> multiplyTwo = arr -> Arrays.stream(arr).map(e -> e *= 2).toArray();

        // Subtract 1 from elements from array
        Function<int[],int[]> subtractOne = arr -> Arrays.stream(arr).map(e -> e -= 1).toArray();

        // Prints all numbers on a new line
        Consumer<int[]> printArray = arr -> Arrays.stream(arr).forEach(e -> System.out.print(e + " "));




        while (!command.equals("end")) {

            switch (command) {
                case "add":
                   numbers = addOne.apply(numbers);
                    break;
                case "multiply":
                    numbers = multiplyTwo.apply(numbers);
                    break;
                case "subtract":
                    numbers = subtractOne.apply(numbers);
                    break;
                case "print":
                    printArray.accept(numbers);
                    System.out.println();
                    break;
            }


            command = scanner.nextLine();
        }




    }
}


