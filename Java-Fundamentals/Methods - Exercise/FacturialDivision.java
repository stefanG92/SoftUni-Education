import java.util.Scanner;

public class FacturialDivision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int first = Integer.parseInt(scanner.nextLine());
        int second = Integer.parseInt(scanner.nextLine());

        System.out.printf("%.2f", factorial(first, second));


    }

    public static double factorial(int one, int two) {
        int firstNumberDivision = one;

        for (int i = one; i >= 1; i--) {
            if (i == 1) {
                break;
            }
            firstNumberDivision *= (i - 1);

        }
        int secondNumberDivision = two;
        for (int i = two; i >= 1; i--) {
            if (i == 1) {
                break;
            }
            secondNumberDivision *= (i - 1);

        }


        double result = 1.0 * firstNumberDivision / secondNumberDivision;

        return result;
    }
}
