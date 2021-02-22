import java.util.Arrays;
import java.util.Scanner;

public class Lab {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] targets = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(t -> Integer.parseInt(t))
                .toArray();

        String line = scanner.nextLine();
        int point = 0;


        while (!line.equals("End")) {
            int index = Integer.parseInt(line);

            if (index >= 0 && index <= targets.length) {

                for (int i = 0; i < targets.length; i++) {
                    int valueTarget = targets[i];

                    targets[i] = -1;
                    point++;


                    for (int j = 0; j < targets.length; j++) {




                        if (valueTarget < targets[j]) {
                            targets[j] -= valueTarget;
                        } else if (valueTarget <= targets[j]) {
                            targets[j] += valueTarget;
                        }
                    }


                }
            }


            line = scanner.nextLine();

        }
        printTargets(targets);

    }
    public static void printTargets (int[] targets){
        for (Object target : targets) {
            System.out.print(target + " ");
        }
    }
}
