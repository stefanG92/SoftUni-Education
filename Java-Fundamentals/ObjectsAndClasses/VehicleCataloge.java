import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class VehicleCataloge {
    static class Vehicle {
        String type;
        String model;
        String color;
        int horsePower;

        public Vehicle(String type, String model, String color, int horsePower) {
            this.type = type;
            this.model = model;
            this.color = color;
            this.horsePower = horsePower;
        }

        public String getType() {
            return type;
        }

        public String getModel() {
            return model;
        }

        public String getColor() {
            return color;
        }

        public int getHorsePower() {
            return horsePower;
        }

        public String toString() {
            return String.format("Type: %s%n" +
                            "Model: %s%n" +
                            "Color: %s%n" +
                            "Horsepower: %d%n", getType().toUpperCase().charAt(0) + getType().substring(1),
                    getModel(), getColor(), getHorsePower());
        }
    }

    public static double averagePower(List<Vehicle> vehicles) {
        if (vehicles.size() == 0) {
            return 0.0;
        }
        return vehicles.stream().mapToDouble(Vehicle::getHorsePower).sum() / vehicles.size();
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


//        typeOfVehicle} {model} {color} {horsepower}

        String line = scanner.nextLine();

        List<Vehicle> vehicles = new ArrayList<>();

        while (!line.equals("End")) {
            String[] date = line.split(" ");

            Vehicle car = new Vehicle(date[0], date[1], date[2], Integer.parseInt(date[3]));
            vehicles.add(car);


            line = scanner.nextLine();
        }

        line = scanner.nextLine();

        while (!line.equals("Close the Catalogue")) {
            String model = line;

            vehicles.stream().filter(vehicle -> vehicle.getModel().equals(model))
                    .forEach(vehicle -> System.out.print(vehicle.toString()));


            line = scanner.nextLine();
        }


        List<Vehicle> cars = vehicles.stream().filter(vehicle -> vehicle.getType().equals("car"))
                .collect(Collectors.toList());
        List<Vehicle> truck = vehicles.stream().filter(vehicle -> vehicle.getType().equals("truck"))
                .collect(Collectors.toList());

        System.out.printf("Cars have average horsepower of: %.2f. %n", averagePower(cars));
        System.out.printf("Trucks have average horsepower of: %.2f. %n", averagePower(truck));
    }

}

