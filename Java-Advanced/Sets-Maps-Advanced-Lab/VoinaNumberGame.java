import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.stream.Collectors;

public class VoinaNumberGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

       LinkedHashSet<Integer> firstPlayer = Arrays.stream(scanner.nextLine().split("\\s+"))
               .map(e -> Integer.parseInt(e))
               .collect(Collectors.toCollection(LinkedHashSet::new));

        LinkedHashSet<Integer> secondPlayer = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(e -> Integer.parseInt(e))
                .collect(Collectors.toCollection(LinkedHashSet::new));

        int rounds = 50;

        while (rounds > 0 && !firstPlayer.isEmpty() && !secondPlayer.isEmpty()){
            rounds--;

            int firstCard = firstPlayer.iterator().next();
            int secondCard = secondPlayer.iterator().next();

            firstPlayer.remove(firstCard);
            secondPlayer.remove(secondCard);

            if(firstCard > secondCard){
                firstPlayer.add(firstCard);
                firstPlayer.add(secondCard);
            }else if(secondCard > firstCard){
                secondPlayer.add(firstCard);
                secondPlayer.add(secondCard);
            }

        }

        if(firstPlayer.size() == secondPlayer.size()){
            System.out.println("Draw!");
        }else if(firstPlayer.size() > secondPlayer.size()){
            System.out.println("First player win!");
        }else {
            System.out.println("Second player win!");
        }

    }
}
