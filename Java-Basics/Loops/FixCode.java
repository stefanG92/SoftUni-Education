import java.util.Scanner;

public class FixCode {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int start = Integer.parseInt(scanner.nextLine());
        int last = Integer.parseInt(scanner.nextLine());



        for (int i = start; i <= last; i++) {
            System.out.printf("%c ",i);


        }


    }
}
