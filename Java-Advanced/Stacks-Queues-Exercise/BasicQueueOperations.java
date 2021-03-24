import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class BasicQueueOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] commandNumbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int n = commandNumbers[0];
        int s = commandNumbers[1];
        int x = commandNumbers[2];

        int[] numbersForQueue = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        ArrayDeque<Integer> queue = offerOrPollNumbers(numbersForQueue, n, s);

        if (!queue.isEmpty()) {
            if (queue.contains(x)) {
                System.out.println("true");
            } else {
                System.out.println(minElement(queue));
            }
        } else {
            System.out.println("0");
        }


    }

    public static ArrayDeque<Integer> offerOrPollNumbers(int[] numbersForQueue, int n, int s) {

        ArrayDeque<Integer> numbers = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            numbers.offer(numbersForQueue[i]);
        }
        while (!numbers.isEmpty() && s > 0) {
            numbers.poll();
            s--;
        }
        return numbers;
    }

    public static int minElement(ArrayDeque<Integer> numbers) {
        int minElement = Collections.min(numbers);
        return minElement;
    }
}
