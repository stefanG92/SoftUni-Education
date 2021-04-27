import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class FilterByAge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countPersons = Integer.parseInt(scanner.nextLine());
        Map<String, Integer> persons = getPersonFromConsole(countPersons, scanner);
        String[] commands = readCommandsFromConsole(scanner);

        if(commands[0].equals("older")){
            orderByOlder(persons,commands);
        }else if(commands[0].equals("younger")){
            orderByYounger(persons,commands);
        }



    }

    private static void orderByYounger(Map<String, Integer> persons, String[] commands) {
        int age = Integer.parseInt(commands[1]);
        String printRules = commands[2];

        for (Map.Entry<String, Integer> p : persons.entrySet()) {
            if(printRules.equals("name")){

                if(p.getValue() <= age){
                    System.out.println(p.getKey());
                }

            }else if(printRules.equals("age")){

                if(p.getValue() <= age){
                    System.out.println(p.getValue());
                }

            }else if(printRules.equals("name age")){

                if(p.getValue() <= age){
                    System.out.println(p.getKey() + " - " + p.getValue());
                }

            }
        }


    }


    public static Map<String, Integer> getPersonFromConsole(int countPersons, Scanner scanner) {

        Map<String, Integer> persons = new LinkedHashMap<>();

        for (int i = 0; i < countPersons; i++) {
            String[] tokens = scanner.nextLine().split(", ");

            persons.put(tokens[0], Integer.parseInt(tokens[1]));
        }

        return persons;
    }

    public static String[] readCommandsFromConsole(Scanner scanner) {
        String[] commands = new String[3];
        for (int i = 0; i < 3; i++) {
            commands[i] = scanner.nextLine();

        }
        return commands;
    }

    public static void orderByOlder(Map<String, Integer> person,String[] commands) {
//- "name", "age" or "name age"
        int age = Integer.parseInt(commands[1]);
        String printRules = commands[2];

        for (Map.Entry<String, Integer> p : person.entrySet()) {
            if(printRules.equals("name")){

                if(p.getValue() >= age){
                    System.out.println(p.getKey());
                }

            }else if(printRules.equals("age")){

                if(p.getValue() >= age){
                    System.out.println(p.getValue());
                }

            }else if(printRules.equals("name age")){

                if(p.getValue() >= age){
                    System.out.println(p.getKey() + " - " + p.getValue());
                }

            }
        }


    }

}
