import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class SetsOfElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] length = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        Set<Integer> n = fillElementsInN(scanner, length);
        Set<Integer> m = fillElementsInM(scanner, length);
        Set<Integer> alRepeatingElements = fillRepeatsElementSet(n, m);

        for (Integer alRepeatingElement : alRepeatingElements) {
            System.out.print(alRepeatingElement + " ");
        }


    }

    public static Set<Integer> fillElementsInN(Scanner scanner, int[] length) {
        Set<Integer> elements = new LinkedHashSet<>();

        for (int i = 0; i < length[0]; i++) {
            elements.add(Integer.parseInt(scanner.nextLine()));
        }
        return elements;
    }

    public static Set<Integer> fillElementsInM(Scanner scanner, int[] length) {
        Set<Integer> elements = new LinkedHashSet<>();

        for (int i = 0; i < length[1]; i++) {
            elements.add(Integer.parseInt(scanner.nextLine()));
        }
        return elements;
    }

    public static Set<Integer> fillRepeatsElementSet(Set<Integer> n, Set<Integer> m) {
        Set<Integer> elements = new LinkedHashSet<>();

        for (Integer integer : n) {
            if (m.contains(integer)) {
                elements.add(integer);
            }
        }


        return elements;

    }
}
