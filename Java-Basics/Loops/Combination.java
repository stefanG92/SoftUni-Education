import java.util.Scanner;

public class Combination {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int first = Integer.parseInt(scanner.nextLine());
        int second = Integer.parseInt(scanner.nextLine());
        int magicNum = Integer.parseInt(scanner.nextLine());


        int counter = 0;
        boolean flag = false;


        for (int i = first; i <= 10; i++) {
            for (int j = second; j <= 10; j++) {

                counter++;

                if (i + j == magicNum) {
                    System.out.printf("Combination N:%d (%d + %d = %d)", counter, i, j, magicNum);
                    flag = true;
                    break;
                }


            }
            if (flag) {
                break;
            }
        }
        if (!flag) {
            System.out.printf("%d combinations - neither equals %d", counter, magicNum);
        }
    }
}



