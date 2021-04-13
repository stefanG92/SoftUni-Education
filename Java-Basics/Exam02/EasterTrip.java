import java.util.Scanner;

public class EasterTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        String country = scanner.nextLine();
        String dateForReservation = scanner.nextLine();
        int nightsCount = Integer.parseInt(scanner.nextLine());


        double costsForTrip = 0;

        if (country.equals("France")) {
            if (dateForReservation.equals("21-23")) {
                costsForTrip = nightsCount * 30.0;
            } else if (dateForReservation.equals("24-27")) {
                costsForTrip = nightsCount * 35.0;
            } else if (dateForReservation.equals("28-31")) {
                costsForTrip = nightsCount * 40.0;
            }
        }

            if (country.equals("Italy")) {
                if (dateForReservation.equals("21-23")) {
                    costsForTrip = nightsCount * 28.0;
                } else if (dateForReservation.equals("24-27")) {
                    costsForTrip = nightsCount * 32.0;
                } else if (dateForReservation.equals("28-31")) {
                    costsForTrip = nightsCount * 39.0;
                }
            }
            if (country.equals("Germany")) {
                if (dateForReservation.equals("21-23")) {
                    costsForTrip = nightsCount * 32.0;
                } else if (dateForReservation.equals("24-27")) {
                    costsForTrip = nightsCount * 37.0;
                } else if (dateForReservation.equals("28-31")) {
                    costsForTrip = nightsCount * 43.0;
                }
            }
            System.out.printf("Easter trip to %s : %.2f leva.", country, costsForTrip);

        }
    }

