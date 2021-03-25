import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class FunGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sizeList = Integer.parseInt(scanner.nextLine());
        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt).toArray();

        ArrayDeque<Integer> queuePlayerA = addedNumbersForA(numbers);
        ArrayDeque<Integer> stackPlayerB = addedNumbersForB(numbers);

        while (!queuePlayerA.isEmpty() || stackPlayerB.isEmpty()) {

            // queue
            int numberA = queuePlayerA.poll();
            // stack
            int numberB = stackPlayerB.pop();

            int result = 0;

            if (numberA < numberB) {

                result = numberB - numberA;
                System.out.print(result + " ");
                stackPlayerB.push(numberB);

            } else if (numberA > numberB) {

                result = numberA - numberB;
                System.out.print(result + " ");
                queuePlayerA.offer(numberA);

            } else if (numberA == numberB) {
                System.out.print(result + " ");
            }

        }

    }

    public static ArrayDeque<Integer> addedNumbersForB(int[] numbers) {
        ArrayDeque<Integer> nums = new ArrayDeque<>();

        for (int i = 0; i < numbers.length; i++) {
            nums.push(numbers[i]);
        }
        return nums;
    }

    public static ArrayDeque<Integer> addedNumbersForA(int[] numbers) {
        ArrayDeque<Integer> nums = new ArrayDeque<>();

        for (int i = 0; i < numbers.length; i++) {
            nums.offer(numbers[i]);
        }
        return nums;
    }
}
