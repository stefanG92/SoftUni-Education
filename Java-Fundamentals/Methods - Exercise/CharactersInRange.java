import java.util.Scanner;

public class CharactersInRange {
    public static int operationWithNumbers(String[] numbersOfInput) {

        int[] numbers = new int[numbersOfInput.length];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = Integer.parseInt(numbersOfInput[i]);
        }
        int counterOperation = 0;
        for (int i = numbers.length - 1; i > 1 ; i--) {
            numbers[0] = numbers[numbers.length -1];
            counterOperation++;
        }
       return counterOperation;
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

    }
}
