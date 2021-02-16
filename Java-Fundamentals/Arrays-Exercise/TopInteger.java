import java.util.Arrays;
import java.util.Scanner;

public class TopInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        for (int i = 0; i < numbers.length; i++) {
            boolean isTopNumber = true;
            int topInt = numbers[i];

            for (int j = i + 1; j < numbers.length; j++) {

                if(topInt <= numbers[j]){
                    isTopNumber = false;
                }

            }
            if(isTopNumber){
                System.out.print(topInt + " ");
            }
        }


    }
}
