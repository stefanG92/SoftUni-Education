import java.util.Scanner;

public class ConcatenateData {


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

               // read information from console
        String firstName = scanner.nextLine();
        String lastName = scanner.nextLine();
        int age = Integer.parseInt(scanner.nextLine());
        String town = scanner.nextLine();

              // input
        System.out.printf("You are %s %s, a %d-years old person from %s.", firstName, lastName, age, town);
    }
}

