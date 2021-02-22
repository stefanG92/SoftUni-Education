import java.util.Scanner;

public class Orders {
    public static double allPriceForProduct(String products, int count) {

        double result = 0;

        if (products.equals("coffee")) {
            result = count * 1.50;
        } else if (products.equals("water")) {
            result = count * 1.00;
        } else if (products.equals("coke")) {
            result = count * 1.40;
        } else if (products.equals("snacks")) {
            result = count * 2.00;
        }
        System.out.printf("%.2f", result);
        return result;
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        int countOfProduct = Integer.parseInt(scanner.nextLine());

        allPriceForProduct(product, countOfProduct);


    }
}
