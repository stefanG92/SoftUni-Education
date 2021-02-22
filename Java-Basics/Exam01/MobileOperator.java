import java.util.Scanner;

public class MobileOperator {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String termContract = scanner.nextLine();
        String tipContract = scanner.nextLine();
        String internet = scanner.nextLine();
        int mountForPay = Integer.parseInt(scanner.nextLine());


        double price = 0;

        if (termContract.equals("one")) {
            if (tipContract.equals("Small")) {
                price = 9.98;
            } else if (tipContract.equals("Middle")) {
                price = 18.99;
            } else if (tipContract.equals("Large")) {
                price = 25.95;
            } else if (tipContract.equals("ExtraLarge")) {
                price = 35.99;
            }
        }
        if (termContract.equals("two")) {
            if (tipContract.equals("Small")) {
                price = 8.58;
            } else if (tipContract.equals("Middle")) {
                price = 17.09;
            } else if (tipContract.equals("Large")) {
                price = 23.59;
            } else if (tipContract.equals("ExtraLarge")) {
                price = 31.79;
            }
        }

        if (internet.equals("yes")) {
            if (price <= 10) {
                price += 5.50;
            } else if (price <= 30) {
                price += 4.35;
            } else {
                price += 3.85;
            }
        }

        double totalPrice = price * mountForPay;

        if (termContract.equals("two")) {
            totalPrice -= totalPrice * 0.0375;
        }

        System.out.printf("%.2f lv.", totalPrice);
    }
}
