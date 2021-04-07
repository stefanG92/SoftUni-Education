import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        Map<String, Integer> allResource = new LinkedHashMap<>();

        while (!input.equals("stop")) {
            String resource = input;
            int quantity = Integer.parseInt(scanner.nextLine());

            Integer line = allResource.get(resource);
            if (line == null) {
                allResource.put(resource, quantity);
            }else{
                allResource.put(resource,allResource.get(resource) + quantity);
            }



            input = scanner.nextLine();
        }
        for (Map.Entry<String, Integer> resource : allResource.entrySet()) {
            System.out.printf("%s -> %d%n",resource.getKey(),resource.getValue());
        }


    }
}
