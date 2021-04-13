import java.util.Scanner;

public class EasterLunch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int easterCakesCount = Integer.parseInt(scanner.nextLine());
        int easterEggsCount = Integer.parseInt(scanner.nextLine());
        int cookiesInKg = Integer.parseInt(scanner.nextLine());

        int easterEggsTotal = easterEggsCount * 12;

        double easterCakePrice = easterCakesCount * 3.20;
        double easterEggsPrice = easterEggsCount * 4.35;

        double cookiesPrice = cookiesInKg * 5.40;

        double paintForEggs = easterEggsTotal * 0.15;

        double totalCosts = easterCakePrice + easterEggsPrice + cookiesPrice + paintForEggs;

        System.out.printf("%.2f",totalCosts);


    }
}
