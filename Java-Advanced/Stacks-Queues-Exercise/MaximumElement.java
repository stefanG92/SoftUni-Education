import java.awt.image.AreaAveragingScaleFilter;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class MaximumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        ArrayDeque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String command = input[0];

            switch (command) {
                case "1":
                    stack.push(Integer.parseInt(input[1]));
                    break;
                case "2":
                    stack.pop();
                    break;
                case "3":
                    int maxElement = maxNumberOfStack(stack);
                    System.out.println(maxElement);
                    break;
            }


        }


    }
    public static int maxNumberOfStack (ArrayDeque<Integer> stack){
        int maxElement = Collections.max(stack);
        return maxElement;
    }
}
