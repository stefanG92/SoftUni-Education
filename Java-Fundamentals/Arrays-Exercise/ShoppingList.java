import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ShoppingList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] products = scanner.nextLine().split("!");

        String line = scanner.nextLine();
        boolean flag = false;

        while (!line.equals("Go Shopping!")) {
            String[] commandsArray = line.split(" ");
            String command = commandsArray[0];
            String product = commandsArray[1];

            switch (command) {

                case "Urgent":



                    break;

                case "Unnecessary":

                    break;

                case "Correct":


                    break;
                case "Rearrange":
                    break;
            }


            line = scanner.nextLine();
        }

        System.out.println(String.join(", ", products));


    }
}
