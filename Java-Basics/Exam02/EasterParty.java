import java.util.Scanner;

public class EasterParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        int guestsCount = Integer.parseInt(scanner.nextLine());
        double priceForOnePerson = Double.parseDouble(scanner.nextLine());
        double budget = Double.parseDouble(scanner.nextLine());


        if(guestsCount >= 10 && guestsCount <= 15){
            priceForOnePerson *= 0.85;
        }
        if(guestsCount > 15 && guestsCount <= 20){
            priceForOnePerson *= 0.80;
        }
        if(guestsCount > 20){
            priceForOnePerson *= 0.75;
        }
        double priceForCake = budget * 0.10;

        double costs = guestsCount * priceForOnePerson + priceForCake;

        String output = "";

        if(budget > costs){
            output = String.format("It is party time! %.2f leva left.",budget - costs);
        }else{
            output = String.format("No party! %.2f leva needed.",costs - budget);
        }
        System.out.println(output);
    }
}
