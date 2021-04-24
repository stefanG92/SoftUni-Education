import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int payForTraining = Integer.parseInt(scanner.nextLine());



        double priceShoes = payForTraining * 0.60;
        double sportOutfit = priceShoes * 0.80;
        double boll = sportOutfit / 4;
        double accessories = boll / 5;
        double total = priceShoes + sportOutfit + boll + accessories + payForTraining;

        System.out.printf("%.2f",total);
    }
}


        
        




