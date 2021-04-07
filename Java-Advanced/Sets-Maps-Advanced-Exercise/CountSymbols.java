import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class CountSymbols {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        Map<Character, Integer> occurrences = new TreeMap<>();
        for (int i = 0; i < line.length(); i++) {
            char current = line.charAt(i);

            occurrences.putIfAbsent(current,0);
            occurrences.put(current,occurrences.get(current) + 1);

        }
        for (Map.Entry<Character, Integer> characterIntegerEntry : occurrences.entrySet()) {
            System.out.println(characterIntegerEntry.getKey() + ": " + characterIntegerEntry.getValue()
                    + " time/s");
        }

    }
}
