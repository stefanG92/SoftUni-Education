import java.util.ArrayDeque;
import java.util.Scanner;

public class StackAndQueue {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> stacks = new ArrayDeque<>();

        String URL = "";
        String line = scanner.nextLine();

        while (!line.equals("Home")) {
            String site = line;

            if (!site.equals("back")) {
               stacks.push(site);

            } else {

                if(URL.equals("")){
                    System.out.println("no previous URLs");
                }else {
                    System.out.println(stacks.peek());
                }
            }


            line = scanner.nextLine();
        }


        for (String stack : stacks) {
            System.out.println(stack);
        }
    }
}
