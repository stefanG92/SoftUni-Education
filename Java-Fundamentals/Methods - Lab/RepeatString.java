import java.util.Scanner;

public class RepeatString {
    public static void repeatInput(String line, int count) {
        for (int i = 0; i < count; i++) {
            System.out.print(line + "");
        }
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        int count = Integer.parseInt(scanner.nextLine());
        repeatInput(input, count);
    }
}
