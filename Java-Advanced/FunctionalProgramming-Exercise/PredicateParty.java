import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateParty {

    static List<String> guests = null;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        guests = Arrays.stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!line.equals("Party!")) {
            String[] commands = line.split("\\s+");

            switch (commands[0]) {
                case "Double":
                    addOneMore(getPredicate(commands));
                    break;
                case "Remove":
                    removeName(getPredicate(commands));
                    break;
            }

            line = scanner.nextLine();
        }


        Consumer<List<String>> printGuests = name -> {
            if (name.isEmpty()) {
                System.out.println("Nobody is going to the party!");
            } else {
                Collections.sort(name);
                System.out.print(name.toString().replaceAll("([\\[\\]])", "") + " are going to the party!");
            }
        };

        printGuests.accept(guests);
    }

    private static void removeName(Predicate<String> predicate) {
        guests.removeIf(predicate);
    }

    public static void addOneMore(Predicate<String> predicate) {
        List<String> namesToAdd = new ArrayList<>();
        guests.stream().filter(predicate).forEach(namesToAdd::add);
        guests.addAll(namesToAdd);

    }

    public static Predicate<String> getPredicate(String[] commands) {
        Predicate<String> predicate = null;

        if (commands[1].equals("StartsWith")) {
            predicate = name -> name.startsWith(commands[2]);
        } else if (commands[1].equals("EndsWith")) {
            predicate = name -> name.endsWith(commands[2]);
        } else {
            predicate = name -> name.length() == Integer.parseInt(commands[2]);
        }


        return predicate;
    }
}
