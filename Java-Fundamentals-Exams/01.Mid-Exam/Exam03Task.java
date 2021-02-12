import java.util.*;
import java.util.stream.Collectors;

public class Exam03Task {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] array = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt).toArray();

        int sum = sumValue(array);
        double averageValue = sum / (double) array.length;

        List<Integer> topNumber = new ArrayList<>();

        for (int number : array) {
            if (number > averageValue) {
                topNumber.add(number);
            }
        }
        if (topNumber.isEmpty()) {
            System.out.println("No");
        } else {
            Collections.sort(topNumber);
            Collections.reverse(topNumber);

            for (int i = 0; i < Math.min(topNumber.size(), 5); i++) {

                System.out.print(topNumber.get(i) + " ");

            }
        }


    }

    public static int sumValue(int[] array) {
        int sum = 0;
        for (int number : array) {
            sum += number;
        }
        return sum;
    }
}
