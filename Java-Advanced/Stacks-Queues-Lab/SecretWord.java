import java.util.ArrayDeque;
import java.util.Scanner;

public class SecretWord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        ArrayDeque<Character> stack = new ArrayDeque<>();

        StringBuilder secretElements = new StringBuilder();

        for (int i = 0; i < line.length(); i++) {
            char currentElement = line.charAt(i);

            if (currentElement != '*' && currentElement != ' ') {
                secretElements.append(currentElement);
                stack.push(currentElement);
            } else if (currentElement == '*') {
                stack.pop();
            }

        }
        StringBuilder secretWord = giveWord(secretElements);



        if (stack.isEmpty()) {

            System.out.println(secretWord.toString());
            System.out.println("The Stack is empty.");

        }


    }

    public static StringBuilder giveWord(StringBuilder secrets) {

        String readyWord = secrets.toString();
        StringBuilder secretsChars = new StringBuilder();

        int correct = readyWord.indexOf('Y');

        for (int i = 0; i < readyWord.length(); i++) {
            if (i == correct) {
                secretsChars.append(readyWord.charAt(i));
                secretsChars.append(' ');
            } else {
                secretsChars.append(readyWord.charAt(i));
            }
        }

        return secretsChars;
    }
}
