import java.util.Scanner;

public class DivisionWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());


        int p1 = 0;
        int p2 = 0;
        int p3 = 0;


        for (int i = 1; i <= n; i++) {
            int numbers = Integer.parseInt(scanner.nextLine());

            if (numbers % 2 == 0) {
                p1++;
            }
            if (numbers % 3 == 0) {
                p2++;
            }
            if (numbers % 4 == 0) {
                p3++;
            }
        }
        double totalP1 = 1.0 * p1 / n * 100;
        double totalP2 = 1.0 * p2 / n * 100;
        double totalP3 = 1.0 * p3 / n * 100;


        System.out.printf("%.2f%%\n",totalP1);
        System.out.printf("%.2f%%\n",totalP2);
        System.out.printf("%.2f%%",totalP3);
    }
}
