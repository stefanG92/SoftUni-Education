import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class MemoryGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> numbers = Arrays.stream(scanner.nextLine().split(" "))
                .collect(Collectors.toList());

        String line = scanner.nextLine();
        int movesCount = 0;
        boolean isMatchingAllElements = true;


        while (!line.equals("end")) {
            String[] indexes = line.split(" ");
            int indexOne = Integer.parseInt(indexes[0]);
            int indexTwo = Integer.parseInt(indexes[1]);

            movesCount++;

            if (indexOne == indexTwo || indexOne > numbers.size() || indexOne < 0) {
//added elements in numbers-=List
                numbers.add(numbers.size() / 2, "-" + movesCount + "a");
                numbers.add(numbers.size() / 2, "-" + movesCount + "a");
                System.out.println("Invalid input! Adding additional elements to the board");

                line = scanner.nextLine();
                continue;
            }

            if (numbers.get(indexOne).equals(numbers.get(indexTwo))) {
                String currentElement = numbers.get(indexOne);
                numbers.remove(indexOne);
                numbers.remove(indexTwo);

                System.out.printf("Congrats! You have found matching elements - %s!%n", currentElement);
            } else {
                System.out.println("Try again!");
            }

            if (!numbers.contains(numbers.get(indexOne)) && !numbers.contains(numbers.get(indexTwo))) {
                isMatchingAllElements = false;
                System.out.printf("You have won in %d turns!", movesCount);

                break;
            }


            line = scanner.nextLine();
        }

        if(isMatchingAllElements){
            System.out.printf("Sorry you lose :(%n");

            for (String number : numbers) {
                System.out.print(number + " ");
            }
        }
    }

}
