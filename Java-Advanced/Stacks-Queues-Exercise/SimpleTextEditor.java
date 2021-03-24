import java.util.ArrayDeque;
import java.util.Scanner;

public class SimpleTextEditor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        StringBuilder text = new StringBuilder();
        ArrayDeque<String> stack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String command = tokens[0];

            switch (command) {
                case "1":

                    stack.push(text.toString());
                    String stringForAppend = tokens[1];
                    text.append(stringForAppend);

                    break;
                case "2":

                    stack.push(text.toString());
                    int countElements = Integer.parseInt(tokens[1]);
                    int startIndex = text.length() - countElements;
                    text.delete(startIndex,startIndex + countElements);

                    break;
                case "3":
                    int index = Integer.parseInt(tokens[1]);
                    System.out.println(text.charAt(index - 1));

                    break;
                case "4":

                    if(!stack.isEmpty()){
                        text = new StringBuilder(stack.pop());
                    }

                    break;
            }


        }
    }
}
