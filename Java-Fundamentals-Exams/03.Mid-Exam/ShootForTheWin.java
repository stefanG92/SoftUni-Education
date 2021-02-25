import com.sun.source.tree.LiteralTree;


import java.util.Arrays;
import java.util.Scanner;

public class ShootForTheWin {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] targets = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt).toArray();

        String line = scanner.nextLine();
        int shootsCount = 0;

        while (!line.equals("End")) {
            int index = Integer.parseInt(line);

            if (index < targets.length && index >= 0) {

                for (int i = 0; i < targets.length; i++) {

                    int currentTarget = targets[index];

                    targets[index] = -1;
                    shootsCount++;


                    for (int j = i + 1; j < targets.length; j++) {

                        if (targets[j] > currentTarget && targets[j] != -1) {
                            targets[j] -= currentTarget;
                        } else if (targets[j] <= currentTarget && targets[j] != -1) {
                            targets[j] += currentTarget;
                        }

                    }
                    break;


                }
            }

            line = scanner.nextLine();
        }


        StringBuilder targetsAsString = targetsString(targets);
        System.out.print("Shot targets: " + shootsCount + " -> " + String.join(" ", targetsAsString));

    }

    public static StringBuilder targetsString(int[] targets) {
        StringBuilder strings = new StringBuilder();
        for (int i = 0; i < targets.length; i++) {
            strings.append(targets[i] + " ");
        }
        return strings;
    }
}


