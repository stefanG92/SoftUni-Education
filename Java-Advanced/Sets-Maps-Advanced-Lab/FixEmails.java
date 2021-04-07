import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class FixEmails {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        Map<String,String> allMails = new LinkedHashMap<>();

        while (!input.equals("stop")) {
            String name = input;
            String mail = scanner.nextLine();

            if(isBgMail(mail,name)){
                allMails.putIfAbsent(name,mail);
                allMails.put(name,mail);
            }

            input = scanner.nextLine();
        }

        for (Map.Entry<String, String> mails : allMails.entrySet()) {
            System.out.println(String.format("%s -> %s",mails.getKey(),mails.getValue()));
        }

    }

    public static boolean isBgMail(String mail, String name) {
        String[] tokens = mail.split("\\.");

        if (!tokens[1].equals("us") && !tokens[1].equals("uk") &&
                !tokens[1].equals("com")) {
            return true;
        }
        return false;
    }
}
