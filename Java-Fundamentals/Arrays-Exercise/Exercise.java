import java.util.Arrays;
import java.util.Scanner;

public class Exercise {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] targets = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(t -> Integer.parseInt(t))
                .toArray();

        String indexAsString = scanner.nextLine();
        int counterShot = 0;
        boolean isValidIndex = false;


        while (!indexAsString.equals("End")){
            int index = Integer.parseInt(indexAsString);

            if(index < targets.length){
                counterShot++;

                for (int i = 0; i < targets.length; i++) {


                    int currentTarget = targets[i];
                    targets[index] = -1;


                    for (int j = i + 1; j < targets.length; j++) {

                        if(currentTarget > targets[j]){
                            targets[j] = targets[j] + currentTarget;
                        }else if(currentTarget <= targets[j]){
                            targets[j] = targets[j] - currentTarget;
                        }

                    }




                }

            }


            indexAsString = scanner.nextLine();

        }
        for (int t : targets) {
            System.out.print(t + " ");
        }
    }
}
