import java.util.Scanner;

public class ArayRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");
        int rotation = Integer.parseInt(scanner.nextLine());


        for (int i = 0; i < rotation; i++) {
            String firstElement = input[0];

            for (int j = 0; j < input.length - 1 ; j++) {
                input[j] = input[j + 1];
            }

            input[input.length - 1] = firstElement;
        }
        System.out.print(String.join(" ",input));
    }
}
