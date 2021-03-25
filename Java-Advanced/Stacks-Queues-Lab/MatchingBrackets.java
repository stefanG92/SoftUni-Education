import java.util.ArrayDeque;
import java.util.Scanner;

public class MatchingBrackets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner (System.in);

        String expression = scanner.nextLine();

        ArrayDeque<Integer> indexes = new ArrayDeque<>();

        for (int i = 0; i < expression.length(); i++) {
            char currentElement = expression.charAt(i);

            if(currentElement == '('){
                indexes.push(i);
            }else if(currentElement == ')'){
                System.out.println(expression.substring(indexes.pop(),i + 1));
            }

        }
    }
}
