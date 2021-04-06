import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class UniqueUsernames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int nameCounts = Integer.parseInt(scanner.nextLine());
        Set<String> uniqueName = new LinkedHashSet<>();
        while (nameCounts-- > 0){
            String name = scanner.nextLine();
            uniqueName.add(name);
        }
        uniqueName.stream().forEach(e -> System.out.println(e));

    }
}
