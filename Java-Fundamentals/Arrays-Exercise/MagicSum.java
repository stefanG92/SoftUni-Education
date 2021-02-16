import java.util.Arrays;
import java.util.Scanner;

public class MagicSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int givenNumber = Integer.parseInt(scanner.nextLine());


        for (int i = 0; i < numbers.length; i++) {
            int firstNumber = numbers[i];


            for (int j = i + 1; j < numbers.length; j++) {
                int secondNumber = numbers[j];

                if(firstNumber + secondNumber == givenNumber){
                    System.out.printf("%d %d%n",firstNumber,secondNumber);
                    break;
                }
            }


        }


    }

}

