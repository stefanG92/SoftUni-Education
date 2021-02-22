import java.util.Scanner;

public class SmallestOfThreeNumbers {
    public static int getMin (int [] numbers){
        int minValue = Integer.MAX_VALUE;

        for (int i = 0; i < numbers.length; i++) {
            if(numbers[i] < minValue){
                minValue = numbers[i];
            }
        }
        return minValue;
    }


    public static void main(String[] args) {
        Scanner scanner  = new Scanner(System.in);


        int[] allNumbers = new int[3];

        for (int i = 0; i < allNumbers.length; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            allNumbers[i] = number;
        }
        System.out.println(getMin(allNumbers));


    }
}
