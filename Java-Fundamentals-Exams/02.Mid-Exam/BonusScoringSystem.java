import java.util.Scanner;

public class BonusScoringSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int studentsCount = Integer.parseInt(scanner.nextLine());
        int lecturesCount = Integer.parseInt(scanner.nextLine());
        int coursesBonus = Integer.parseInt(scanner.nextLine());


        double studentWinner = Double.MIN_VALUE;
        double studentAttendancesWinner = 0;

        for (int i = 0; i < studentsCount; i++) {
            double studentAttendances = Integer.parseInt(scanner.nextLine());

            double studentBonus = studentAttendances / lecturesCount * (5 + coursesBonus);

            if (studentBonus > studentWinner) {
                studentWinner = studentBonus;
                studentAttendancesWinner = studentAttendances;
            }

        }

        System.out.printf("Max Bonus: %.0f.%n" +
                "The student has attended %.0f lectures.", Math.ceil(studentWinner), Math.ceil(studentAttendancesWinner));


    }
}










