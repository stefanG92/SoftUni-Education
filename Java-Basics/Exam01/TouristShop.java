import java.util.Scanner;

public class TouristShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String line = scanner.nextLine();


        double costs = 0;
        int counter = 0;

        while (!line.equals("Stop")) {

            double priceOfProduct = Double.parseDouble(scanner.nextLine());

            counter++;

            if (counter == 3) {
                priceOfProduct = priceOfProduct / 2;
            }

            costs += priceOfProduct;

            if (priceOfProduct > budget) {
                System.out.println("You don't have enough money!");
                System.out.printf("You need %.2f leva!",priceOfProduct - budget);
                break;
            }

            budget -= priceOfProduct;



            line = scanner.nextLine();
        }


        if (line.equals("Stop")) {
            System.out.printf("You bought %d products for %.2f leva.", counter, costs);
        }

    }
}
