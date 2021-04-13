import java.util.Scanner;

public class EasterEggs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstPlayerEggsCount = Integer.parseInt(scanner.nextLine());
        int secondPlayerEggsCount = Integer.parseInt(scanner.nextLine());

        String line = scanner.nextLine();

        boolean isGameOverForOne = false;
        boolean isGameOverForTwo = false;

        while (!line.equals("End of battle")) {


            if (line.equals("one")) {
                secondPlayerEggsCount -= 1;
            }

            if (line.equals("two")) {
                firstPlayerEggsCount -= 1;
            }
            if (firstPlayerEggsCount == 0) {
                isGameOverForOne = true;
                break;
            }

            if (secondPlayerEggsCount == 0) {
                isGameOverForTwo = true;
                break;
            }

            line = scanner.nextLine();
        }
        String output = "";
        if (isGameOverForOne) {
            output = String.format("Player one is out of eggs. Player two has %d eggs left.", secondPlayerEggsCount);
        }
        if (isGameOverForTwo) {
            output = String.format("Player two is out of eggs. Player one has %d eggs left.", firstPlayerEggsCount);
        }
        if (line.equals("End of battle")) {
            System.out.printf("Player one has %d eggs left.\n", firstPlayerEggsCount);
            System.out.printf("Player two has %d eggs left.", secondPlayerEggsCount);
        }

        System.out.println(output);
    }
}