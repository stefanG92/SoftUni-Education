import java.util.Scanner;

public class GodzilavsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int staticNum = Integer.parseInt(scanner.nextLine());
        double clothingPrice = Double.parseDouble(scanner.nextLine());

        double decorPrice = budget * 0.10;

        if (staticNum > 150) {
            clothingPrice = clothingPrice * 0.90;
        }
        double all = decorPrice + staticNum * clothingPrice;

        if (all > budget) {
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.", all - budget);
        } else if (budget >= all) {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", budget - all);


        }

    }
}

