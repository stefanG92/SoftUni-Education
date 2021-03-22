import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        ArrayDeque<String> history = new ArrayDeque<>();

        String currentURL = null;

        while (!line.equals("Home")) {

            if (line.equals("back")) {

                if (history.isEmpty()) {
                    System.out.println("no previous URLs");
                    line = scanner.nextLine();
                    continue;

                } else {
                    currentURL = history.pop();
                }

            } else {
               if(currentURL != null){
                   history.push(currentURL);
               }
               currentURL = line;

            }

            System.out.println(currentURL);

            line = scanner.nextLine();
        }


    }
}
