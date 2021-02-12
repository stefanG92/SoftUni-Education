import java.util.Arrays;
import java.util.Scanner;

public class Exam02Task {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt).toArray();


        String line = scanner.nextLine();

        while (!line.equals("end")) {
            String[] commandsArray = line.split(" ");
            String command = commandsArray[0];

//“swap {index1} {index2}”
//“multiply {index1} {index2}”
//“decrease”
            switch (command) {
                case "swap":
                    int indexOne = parseIndex(commandsArray[1]);
                    int indexTwo = parseIndex(commandsArray[2]);

                    swapArray(numbers, indexOne, indexTwo);
                    break;
                case "multiply":
                    indexOne = parseIndex(commandsArray[1]);
                    indexTwo = parseIndex(commandsArray[2]);

                    multiplyElements(numbers, indexOne, indexTwo);
                    break;
                case "decrease":
                    decreaseElements(numbers);
                    break;
            }


            line = scanner.nextLine();
        }


        printNumbers(numbers);

    }

    public static void printNumbers(int[] numbers) {
        for (int i = 0; i < numbers.length; i++) {
            if (i != numbers.length - 1) {
                System.out.print(numbers[i] + ", ");
            } else {
                System.out.print(numbers[i]);
            }
        }
    }

    public static int parseIndex(String elementOfArray) {
        int index = Integer.parseInt(elementOfArray);
        return index;
    }

    public static void swapArray(int[] numbers, int indexOne, int indexTwo) {

        int currentElement = numbers[indexOne];
        numbers[indexOne] = numbers[indexTwo];
        numbers[indexTwo] = currentElement;
    }

    public static void multiplyElements(int[] numbers, int indexOne, int indexTwo) {

        int multiplyNumbers = numbers[indexOne] * numbers[indexTwo];
        numbers[indexOne] = multiplyNumbers;
    }

    public static void decreaseElements(int[] numbers) {
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] - 1;
        }
    }
}
