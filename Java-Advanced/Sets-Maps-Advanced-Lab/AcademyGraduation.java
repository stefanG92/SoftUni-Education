import java.util.*;
import java.util.stream.Collectors;

public class AcademyGraduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int studentsCount = Integer.parseInt(scanner.nextLine());
        Map<String, Double> students = new TreeMap<>();

        while (studentsCount-- > 0) {
            String studentName = scanner.nextLine();
            double[] grades = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToDouble(Double::parseDouble).average().stream().toArray();

            students.put(studentName,grades[0]);

        }
        students.entrySet().stream().forEach(s -> {
            System.out.printf("%s is graduated with %f%n",s.getKey(),s.getValue());
        });
    }
}
