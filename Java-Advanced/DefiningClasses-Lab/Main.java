import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        List<CarClass> cars = new ArrayList<>();

        while (n-- > 0) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String brand = tokens[0];
            CarClass car;

            if (tokens.length == 1) {
                car = new CarClass(brand);
            } else {
                String model = tokens[1];
                int horse = Integer.parseInt(tokens[2]);
                car = new CarClass(brand,model,horse);
            }

            cars.add(car);


        }

        printCars(cars);


    }

    public static void printCars(List<CarClass> cars) {
        for (CarClass car : cars) {
            System.out.print(String.format("The car is: %s %s - %d HP.%n", car.getBrand(), car.getModel(), car.getHorsePower()));
        }
    }
}
