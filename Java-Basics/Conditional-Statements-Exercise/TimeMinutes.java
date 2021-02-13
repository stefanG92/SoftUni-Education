import java.util.Scanner;

public class TimeMinutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hour = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());

        int hourOnMinutes = hour * 60 + minutes + 15;
        int minutesOnHour = hourOnMinutes / 60 ;
        int later =  minutesOnHour % 60;

        if (later < 10) {
            System.out.printf("%d:0%d", minutesOnHour ,later,minutesOnHour );
        } else {
            System.out.printf("%d:%d", minutesOnHour, later);
        }
    }
}

