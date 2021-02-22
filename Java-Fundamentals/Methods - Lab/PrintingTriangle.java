import java.util.Scanner;

public class PrintingTriangle {
    public static void takeTriangle(int count){
        int start = 1;

        for (int i = start; i <= count; i++) {
            System.out.print(i + " ");

            for (int j = count; j >= 1; j--) {
                System.out.print(j + " ");
            }
        }
    }




    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());
        takeTriangle(count);

    }
}
