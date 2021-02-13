import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Inventory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> collection = Arrays.stream(scanner.nextLine().split(", "))
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!line.equals("Craft!")) {
            String[] commandsArray = line.split(" - ");
            String command = commandsArray[0];
            String[] oldOrNewItem = commandsArray[1].split(":");
            String item = commandsArray[1];


            switch (command) {
                case "Collect":
                    if (!collection.contains(item)) {
                        collection.add(item);
                    }
                    break;
                case "Drop":
                    if (collection.contains(item)) {
                        collection.remove(item);
                    }
                    break;
                case "Combine Items":

                    String oldItem = oldOrNewItem[0];
                    int indexOfOldItem = 0;
                    boolean isExist = false;
                    for (int i = 0; i < collection.size(); i++) {
                        if (oldItem.equals(collection.get(i))) {
                            indexOfOldItem = i;
                            isExist = true;
                            break;
                        }
                    }
                    if (isExist) {
                        collection.add(indexOfOldItem + 1, oldOrNewItem[1]);
                    }
                    break;
                case "Renew":

                    for (int i = 0; i < collection.size(); i++) {
                        if (item.equals(collection.get(i))) {
                            collection.remove(i);
                            collection.add(collection.size(), item);
                            break;
                        }
                    }
                    break;
            }


            line = scanner.nextLine();
        }

        System.out.print(String.join(", ", collection));
    }
}
