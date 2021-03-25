import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class Books {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int actionCount = Integer.parseInt(scanner.nextLine());
        ArrayDeque<String> books = new ArrayDeque<>();
        ArrayDeque<Integer> exerciseCount = new ArrayDeque<>();



        for (int i = 0; i < actionCount; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            int command = Integer.parseInt(tokens[0]);
            int count = 0;
            if (command == -1) {

                int exercises = exerciseCount.pop();

                if(exercises > exerciseCount.peek()){
                    books.pop();
                    count++;

                    System.out.printf("%d %s",count,books.pop());
                }else {
                    System.out.printf("%d %s",count,books.pop());
                }

            } else {

                exerciseCount.push(command);
                books.push(tokens[1]);
            }

        }

    }
}
