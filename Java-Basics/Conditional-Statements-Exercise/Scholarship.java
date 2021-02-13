import java.util.Scanner;

public class Scholarship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double incomeLv = Double.parseDouble(scanner.nextLine());
        double averageGrade = Double.parseDouble(scanner.nextLine());
        double salaryMin = Double.parseDouble(scanner.nextLine());

        double socialShip = 0.0;
        double excellentShip = 0.0;

        if (incomeLv < salaryMin) {
            if (averageGrade > 4.50) {
                socialShip = salaryMin * 0.35;
            }
            if (averageGrade >= 5.50) {
                excellentShip = Math.floor(averageGrade * 25);
            }
            boolean isSocial = false;

            if (socialShip != 0) {
                if (socialShip > excellentShip) {
                    System.out.printf("You get a Social scholarship %.0f BGN", socialShip);
                    isSocial = true;
                }
            }
            if (excellentShip != 0) {
                if (!isSocial)
                    System.out.printf("You get a scholarship for excellent results %.0f BGN", excellentShip);
            }
        }
        if (socialShip == 0) {
            if (excellentShip == 0) {
                System.out.println("You cannot get a scholarship!");
            }
        }

    }
}



