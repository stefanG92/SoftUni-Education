import java.util.Scanner;

public class GreaterOfTwoValues {

    public static int operationWithInt(String commands, Scanner scanner) {
        int maxIs = 0;
        if (commands.equals("int")) {
            int firstNumber = Integer.parseInt(scanner.nextLine());
            int secondNumber = Integer.parseInt(scanner.nextLine());

            if (firstNumber > secondNumber) {
                maxIs = firstNumber;
            } else {
                maxIs = secondNumber;
            }
        }

        return maxIs;

    }

    public static char operationWithChar(String commands, Scanner scanner) {
        int maxIs = 0;
        if (commands.equals("char")) {
            char first = scanner.nextLine().charAt(0);
            char second = scanner.nextLine().charAt(0);

            int firstNumber = (int) first;
            int secondNumber = (int) second;


            if (firstNumber > secondNumber) {
                return first;
            } else {
                return second;
            }
        }

        return (char) maxIs;
    }

    public static String operationWithString(String commands, Scanner scanner) {
        String maxIs = "";

        if (commands.equals("string")) {
            String first = scanner.nextLine();
            String second = scanner.nextLine();

            int lengthFirst = first.length();
            int lengthSecond = second.length();

            if (lengthFirst > lengthSecond) {
                maxIs = first;
            } else {
                maxIs = second;
            }
        }
        return maxIs;
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();

        if (command.equals("int")) {
            System.out.println(operationWithInt(command, scanner));
        } else if (command.equals("char")) {
            System.out.println(operationWithChar(command, scanner));
        } else if (command.equals("string")) {
            System.out.println(operationWithString(command, scanner));
        }

    }
}
