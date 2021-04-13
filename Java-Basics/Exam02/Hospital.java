import java.util.Scanner;

public class Hospital {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int period = Integer.parseInt(scanner.nextLine());

        int treated = 0;
        int noTreated = 0;
        int medicVolume = 7;
        int dayCount = 0;

        for (int i = 1; i <= period; i++) {
            dayCount++;
            int patientCount = Integer.parseInt(scanner.nextLine());

            if (noTreated > treated && i % 3 == 0) {
                medicVolume++;
            }
            if (patientCount <= medicVolume) {
                treated += patientCount ;
            }
            if (patientCount > medicVolume) {
                noTreated += patientCount - medicVolume;
            }


        }
        System.out.printf("Treated patients: %d.%n", treated);
        System.out.printf("Untreated patients: %d.", noTreated);

    }
}
