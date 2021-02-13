import java.util.Scanner;

public class ToyShopInClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double vacationPrice = Double.parseDouble(scanner.nextLine());
        int puzzles = Integer.parseInt(scanner.nextLine());
        int dolls = Integer.parseInt(scanner.nextLine());
        int bears = Integer.parseInt(scanner.nextLine());
        int minions = Integer.parseInt(scanner.nextLine());
        int tracks = Integer.parseInt(scanner.nextLine());

        int toysCount = puzzles + dolls + bears + minions + tracks;
        double price = puzzles * 2.6 + dolls * 3 + bears * 4.10 + minions * 8.2 + tracks * 2;

        if(toysCount >= 50){
            price *= 0.75;
        }
        price *= 0.90;
        //String output = "";
        if(vacationPrice <= price){
            System.out.printf("Yes! %.2f lv left.",price - vacationPrice);
        }else {
            System.out.printf("Not enough money! %.2f lv needed.",price - vacationPrice);
        }
    }
}
