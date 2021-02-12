import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Exam01Task {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int capacityOfEmployees = calculateCapacity(scanner);

        int waitingPeople = scanner.nextInt();
        int hours = 0;


        while (waitingPeople > 0){
            hours ++;

            if(hours % 4 != 0){
                waitingPeople -= capacityOfEmployees;
            }

        }


        System.out.printf("Time needed: %dh.%n",hours);


    }
    public static int calculateCapacity (Scanner scanner){
        int capacity = 0;
        for (int i = 0; i < 3; i++) {
            capacity += Integer.parseInt(scanner.nextLine());
        }
        return capacity;
    }
}

