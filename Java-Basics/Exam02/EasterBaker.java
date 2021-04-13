import java.util.Scanner;

public class EasterBaker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int easterCakeCount = Integer.parseInt(scanner.nextLine());

        double needSugar = 0;
        double needFlour = 0;
        int maxSugar = Integer.MIN_VALUE;
        int maxFlour = Integer.MIN_VALUE;

        for (int i = 1; i <= easterCakeCount; i++) {
            int sugarGr = Integer.parseInt(scanner.nextLine());
            needSugar += sugarGr;
            int flourGr = Integer.parseInt(scanner.nextLine());
            needFlour += flourGr;

            if (sugarGr > maxSugar) {
                maxSugar = sugarGr;
            }
            if (flourGr > maxFlour) {
                maxFlour = flourGr;
            }
        }
        double totalSugarInPack = needSugar / 950;
        double totalFlourInPack = needFlour / 750;

//        "Sugar: {брой нужни пакети захар}"
//        "Flour: {брой нужни пакет брашно}"
//        "Max used flour is {максимално количество грамове брашно, използвани за правенето на козунак} grams, max used sugar is {максимално количество грамове захар, използвани за правенето на козунак} grams."
        System.out.printf("Sugar: %.0f%n",Math.ceil(totalSugarInPack));
        System.out.printf("Flour: %.0f%n",Math.ceil(totalFlourInPack));
        System.out.printf("Max used flour is %d grams, max used sugar is %d grams.",maxFlour,maxSugar);
    }
}
