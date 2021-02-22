import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int chickenMenuCount = Integer.parseInt(scanner.nextLine());
        int fishMenuCount = Integer.parseInt(scanner.nextLine());
        int vegetableMenuCount = Integer.parseInt(scanner.nextLine());



        double chickenMenuPrice = chickenMenuCount * 10.35;
        double fishMenuPrice =fishMenuCount * 12.40;
        double vegetableMenu =vegetableMenuCount * 8.15;
        double allPrice = chickenMenuPrice + fishMenuPrice + vegetableMenu;
        double desertPrice = allPrice * 0.20;
        double total = allPrice + desertPrice + 2.50;

        System.out.printf("Total: %.2f%n",total);

    }
}
