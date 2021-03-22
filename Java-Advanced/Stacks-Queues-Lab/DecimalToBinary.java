import java.util.ArrayDeque;
import java.util.Scanner;

public class DecimalToBinary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        ArrayDeque<Integer> stack = new ArrayDeque<>();

        boolean isZeroNumber = true;

        while (number != 0) {

            isZeroNumber = false;

            stack.push(number % 2);
            number /= 2;

        }

       if(isZeroNumber){
           System.out.println(number);
       }else{
           while (!stack.isEmpty()){
               System.out.print(stack.pop());
           }
       }


    }
}
