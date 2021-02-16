import java.util.Scanner;

public class ReverseAnArrayOfStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] elements = scanner.nextLine().split(" ");

        for (int i = 0; i < elements.length / 2; i++) {
            String currentElement = elements[i];
            elements[i] = elements[elements.length - i - 1];
            elements[elements.length - i -1] = currentElement;

        }
        System.out.println(String.join(" ",elements));



    }
}
