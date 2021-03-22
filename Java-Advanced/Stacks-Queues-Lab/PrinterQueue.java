import java.util.ArrayDeque;
import java.util.Scanner;

public class PrinterQueue {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        ArrayDeque<String> files = new ArrayDeque<>();

        while (!line.equals("print")) {

            if (line.equals("cancel")) {
                if (files.isEmpty()) {
                    System.out.println("Printer is on standby");
                } else {
                    System.out.println("Canceled " + files.poll());
                }
            } else {
                files.offer(line);
            }

            line = scanner.nextLine();
        }

        while (!files.isEmpty()){
            System.out.println(files.poll());
        }
    }
}
