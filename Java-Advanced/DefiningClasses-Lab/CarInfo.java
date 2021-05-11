import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CarInfo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        List<Car> cars = new ArrayList<>();

        while (n-- > 0) {
            String[] tokens = scanner.nextLine().split("\\s+");

            String brand = tokens[0];
            String model = tokens[1];
            int horse = Integer.parseInt(tokens[2]);

            Car car = new Car(brand, model, horse);

            cars.add(car);
        }

        printCars(cars);

    }

    public static void printCars(List<Car> cars) {
        for (Car car : cars) {
            System.out.print(String.format("The car is: %s %s - %d HP.%n",car.getBrand(),car.getModel(),car.getHorsePower()));
        }
    }
}
