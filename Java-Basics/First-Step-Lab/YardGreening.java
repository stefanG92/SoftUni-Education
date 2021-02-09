import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double yardSize = Double.parseDouble(scanner.nextLine());

        double priceForYard = yardSize * 7.61 ;

        double discord = priceForYard * 0.18;

        System.out.printf("The final price is: %.2f lv.%n" +
                "The discount is: %.2f lv.",priceForYard - discord,discord);
    }
}
