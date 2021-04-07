import javax.management.monitor.StringMonitor;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Phonebook {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, String> phonebook = new LinkedHashMap<>();

        String line = scanner.nextLine();

        while (!line.equals("stop")) {

            if (line.equals("search")) {
                searchPersonInPhonebook(phonebook, scanner);
                break;
            }
            String[] personInfo = line.split("-");

            phonebook.putIfAbsent(personInfo[0], personInfo[1]);
            phonebook.put(personInfo[0], personInfo[1]);

            if (line.equals("search")) {
                searchPersonInPhonebook(phonebook, scanner);
                break;
            }

            line = scanner.nextLine();
        }
    }

    private static void searchPersonInPhonebook(Map<String, String> phonebook, Scanner scanner) {
        String name = scanner.nextLine();

        while (!name.equals("stop")) {

            if (phonebook.containsKey(name)) {
                for (Map.Entry<String, String> person : phonebook.entrySet()) {
                    if (person.getKey().equals(name)) {
                        System.out.printf("%s -> %s%n", person.getKey(), person.getValue());
                    }
                }

            } else {
                System.out.println(String.format("Contact %s does not exist.", name));
            }

            name = scanner.nextLine();
        }
    }
}
