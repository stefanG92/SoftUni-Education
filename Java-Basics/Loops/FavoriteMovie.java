import java.util.Scanner;

public class FavoriteMovie {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nameFilm = scanner.nextLine();


        int filmCounter = 0;
        int number = 0;
        int total = 0;
        int bestFilm = Integer.MIN_VALUE;
        String film = "";


        while (!nameFilm.equals("STOP")) {
            int length = nameFilm.length();
            filmCounter++;

            for (int i = 0; i < length; i++) {

                number = (int) nameFilm.charAt(i);

                if (number == 32) {
                    total += number;
                }

                if (number > 64 && number <= 90) {
                    total += number - length;
                }
                if (number > 96 && number <= 122) {
                    total += number - 2 * length;
                }
            }

            if (total > bestFilm) {
                bestFilm = total;
                film = nameFilm;
            }

            total = 0;

            if (filmCounter == 7) {
                System.out.println("The limit is reached.");
                System.out.printf("The best movie for you is %s with %d ASCII sum.",film,bestFilm);
                break;
            }



            nameFilm = scanner.nextLine();

        }



        if(nameFilm.equals("STOP")){
            System.out.printf("The best movie for you is %s with %d ASCII sum.",film,bestFilm);
        }
    }
}
