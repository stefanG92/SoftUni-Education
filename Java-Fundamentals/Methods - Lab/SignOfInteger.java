import java.util.Scanner;

public class SignOfInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        printNumber(readNumber(scanner));


    }

    public static int readNumber(Scanner scanner) {
        int number = Integer.parseInt(scanner.nextLine());
        return number;
    }

    public static void printNumber(int number) {
        if (number > 0) {
            System.out.printf("The number %d is positive.", number);
        } else if (number < 0) {
            System.out.printf("The number %d is negative.", number);
        } else if (number == 0) {
            System.out.printf("The number %d is zero.", number);
        }
    }
}

