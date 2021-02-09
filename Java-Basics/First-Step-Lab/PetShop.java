import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dogsCount = Integer.parseInt(scanner.nextLine());
        int anotherAnimal = Integer.parseInt(scanner.nextLine());

        double dogFoodPrice = dogsCount * 2.50;
        double animalFoodPrice = anotherAnimal * 4.00;

        System.out.println(dogFoodPrice + animalFoodPrice);
    }
}
