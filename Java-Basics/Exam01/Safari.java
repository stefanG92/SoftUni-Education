import java.util.Scanner;

public class Safari {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        double needPetrol = Double.parseDouble(scanner.nextLine());
        String dayFromWeek = scanner.nextLine();


        double priceForPetrol = needPetrol * 2.10;
        double costs = priceForPetrol + 100;
        double costsWithDiscount = 0;

        if (dayFromWeek.equals("Saturday")) {
            costsWithDiscount = costs * 0.90;
        } else if (dayFromWeek.equals("Sunday")) {
            costsWithDiscount = costs * 0.80;
        }


        String output = "";

        if (budget >= costsWithDiscount) {
            output = String.format("Safari time! Money left: %.2f lv.", budget - costsWithDiscount);
        } else {
            output = String.format("Not enough money! Money needed: %.2f lv.", costsWithDiscount - budget);
        }

        System.out.println(output);
    }
}
