import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class NationalCourt {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> neighborhood = Arrays.stream(scanner.nextLine().split("@"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!line.equals("Love!")){
            String[] tokens = line.split("\\s+");
            int length = Integer.parseInt(tokens[1]);

            int index = -1;

            for (int i = 0; i < neighborhood.size(); i++) {
                int currentHouse = neighborhood.get(i);

                if(i == length){
                    currentHouse -= 2;
                    neighborhood.set(i,currentHouse);
                    index = i;
                    i = index;
                    break;
                }
            }



            line = scanner.nextLine();
        }


    }
}
