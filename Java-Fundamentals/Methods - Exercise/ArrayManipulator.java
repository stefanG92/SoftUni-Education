import java.util.Scanner;

public class ArrayManipulator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");

        int[] numbers = new int[input.length];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = Integer.parseInt(input[i]);
        }

        String inputCommand = scanner.nextLine();

        while (!inputCommand.equals("end")) {

            String commands = inputCommand;
            switch (commands) {
                case "exchange":
//                    exchangeOperation(numbers,commands);
                    break;
                case "max even":
                    maxEven(numbers);
                    break;
                case "max odd":
                    break;
                case "min even":
                    break;
                case "min odd":
                    break;
                case "first even":
                    break;
                case "first odd":
                    break;
                case "last even":
                    break;
                case "last odd":
                    break;
            }
            inputCommand = scanner.nextLine();
        }


    }

//    public static void exchangeOperation(int[] numbers, String command) {
//        int index = ;
//
//        if (index > numbers.length - 1) {
//            System.out.println("Invalid index");
//            return;
//        }
//
//        int[] first = new int[index + 1];
//        int[] second = new int[numbers.length - (index + 1)];
//
//        for (int i = 0; i <= index; i++) {
//            first[i] = numbers[i];
//        }
//        for (int i = index + 1; i < numbers.length; i++) {
//            second[i - (index + 1)] = numbers[i];
//        }
//        for (int i = 0; i < second.length; i++) {
//            numbers[i] = second[i];
//        }
//        for (int i = 0; i < first.length; i++) {
//            numbers[i + second.length] = first[i];
//        }
//
//    }

    public static void maxEven(int[] numbers) {
        int indexMax = Integer.MIN_VALUE;
        int evenNumber = 0;
        int oddNumber = 0;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                evenNumber = numbers[i];
                if (evenNumber > indexMax) {
                    indexMax = i;

                } else {
                    oddNumber = numbers[i];

                }

            }
        }
        System.out.println(indexMax);
    }
    }
