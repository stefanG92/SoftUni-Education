import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class ParkingLot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Set<String> carNumbers = new LinkedHashSet<>();

        String line = scanner.nextLine();

        while (!line.equals("END")){
            String[] command = line.split(", ");

            if(command[0].equals("IN")){
                carEnterInTheParking(carNumbers,command[1]);
            }else {
                carComeOutFromTheParking(carNumbers,command[1]);
            }

            line = scanner .nextLine();
        }
        printAllCarsInTheParking(carNumbers);

    }
    public static void carEnterInTheParking (Set<String> carNumbers,String number){
        carNumbers.add(number);
    }
    public static void carComeOutFromTheParking (Set<String> carNumbers,String number){
        carNumbers.remove(number);
    }
    public static void printAllCarsInTheParking (Set<String> carNumbers){

        if(!carNumbers.isEmpty()){
            carNumbers.stream()
                    .forEach(e -> System.out.println(e));
        }else {
            System.out.println("Parking Lot is Empty");
        }


    }
}
