import java.lang.reflect.Array;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Robotics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> robots = Arrays.stream(scanner.nextLine().split(";"))
                .collect(Collectors.toList());

        String[] robotsName = new String[robots.size()];
        int[] robotsWorkTime = new int[robots.size()];

        for (int i = 0; i < robots.size(); i++) {
            String[] tokens = robots.get(i).split("-");
            robotsName[i] = tokens[0];
            robotsWorkTime[i] = Integer.parseInt(tokens[1]);
        }

        int[] timeForWork = Arrays.stream(scanner.nextLine().split(":"))
                .mapToInt(Integer::parseInt).toArray();


        String line = scanner.nextLine();

        ArrayDeque<String> productsQueue = new ArrayDeque<>();

        while (!line.equals("End")) {
            productsQueue.offer(line);
            line = scanner.nextLine();
        }

        int hours = timeForWork[0];
        int minutes = timeForWork[1];
        int seconds = timeForWork[2];


        // convert time in seconds
        int startTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

        int[] robotsWorkLeft = new int[robotsName.length];

        while (!productsQueue.isEmpty()) {
            startTimeInSeconds++;
            String product = productsQueue.poll();

            int index = -1;

            for (int i = 0; i < robotsWorkLeft.length; i++) {
                if (robotsWorkLeft[i] > 0) {
                    // robots is work
                    robotsWorkLeft[i]--;
                }
                if (robotsWorkLeft[i] == 0 && index == -1) {
                    index = i;
                }

            }

            if (index != -1) {
                robotsWorkLeft[index] = robotsWorkTime[index];
                System.out.println(printRobotDate(robotsName[index], product, startTimeInSeconds));
            } else {
                //index = -1 -> all robots are busy

                productsQueue.offer(product);

            }

        }


    }

    public static String printRobotDate(String robot, String product, int startTimeInSeconds) {
        long seconds = startTimeInSeconds % 60;
        long hours = (startTimeInSeconds / (60 * 60)) % 24;
        long minutes = (startTimeInSeconds / 60) % 60;

        String time = String.format("%02d:%02d:%02d",hours,minutes,seconds);

        return String.format("%s - %s [%s]", robot, product, time);
    }
}
