import java.lang.reflect.Array;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class BasicStackOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbersInput = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        int[] numbersForStack = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();


        int numN = numbersInput[0];
        int numS = numbersInput[1];
        int numX = numbersInput[2];

        ArrayDeque<Integer> stack = importTheNumbers(numbersForStack, numN, numS);

        if (!stack.isEmpty()) {
            if (stack.contains(numX)) {
                System.out.println("true");
            } else {

                int minElement = Collections.min(stack);
                System.out.println(minElement);

            }
        } else {
            System.out.println(0);
        }


    }

    public static ArrayDeque<Integer> importTheNumbers(int[] numbersForStack, int numN, int numS) {

        ArrayDeque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < numN; i++) {
            stack.push(numbersForStack[i]);
        }
        for (int i = 0; i < numS; i++) {
            stack.pop();
        }
        return stack;
    }
}
