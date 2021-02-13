import java.util.Scanner;

public class ChampionSwimming {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double recordSec = Double.parseDouble(scanner.nextLine());
        double metres = Double.parseDouble(scanner.nextLine());
        double metresSec = Double.parseDouble(scanner.nextLine());

        double metresOnSeconds = metres * metresSec;
        double waterStop = Math.floor(metres / 15) * 12.5;
        double time = metresOnSeconds + waterStop;

        double fall = 0;

        if (recordSec < time) {
            fall = time - recordSec;
            System.out.printf("No, he failed! He was %.2f seconds slower.", fall);
        }else if (time < recordSec) {
                fall = recordSec - time;
                System.out.printf(" Yes, he succeeded! The new world record is %.2f seconds.", time);
            }
        }
    }



