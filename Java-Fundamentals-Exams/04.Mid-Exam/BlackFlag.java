import java.util.Scanner;

public class BlackFlag {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int plunderDaysCount = Integer.parseInt(scanner.nextLine());
        int plunderForDay = Integer.parseInt(scanner.nextLine());
        int expectedPlunder = Integer.parseInt(scanner.nextLine());

        double plunderForAllDays = 0;
        for (int i = 1; i <= plunderDaysCount; i++) {
            plunderForAllDays += plunderForDay;

            if (i % 3 == 0) {
                plunderForAllDays += 1.0 * plunderForDay / 2;
            }

            if (i % 5 == 0) {
                plunderForAllDays *= 0.70;
            }

        }

        if (plunderForAllDays >= expectedPlunder) {
            System.out.printf("Ahoy! %.2f plunder gained.%n", plunderForAllDays);
        } else {
            double plunderInPercentage = plunderForAllDays / expectedPlunder * 100;
            System.out.printf("Collected only %.2f%% of the plunder.",plunderInPercentage);
        }
    }
}
