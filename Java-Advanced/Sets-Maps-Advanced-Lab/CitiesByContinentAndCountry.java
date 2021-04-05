import java.util.*;

public class CitiesByContinentAndCountry {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        Map<String, Map<String, List<String>>> places = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {

            String[] tokens = scanner.nextLine().split("\\s+");
            String continents = tokens[0];
            String countries = tokens[1];
            String cities = tokens[2];

            places.putIfAbsent(continents, new LinkedHashMap<>());
            places.get(continents).putIfAbsent(countries, new ArrayList<>());
            places.get(continents).get(countries).add(cities);

        }

        places.entrySet().stream()
                .forEach(entry -> {
                    System.out.println(entry.getKey() + ":");
                    entry.getValue().forEach((k,v) -> {
                        System.out.printf("%s -> %s%n",k,String.join(", ",v));
                    });
                });

    }
}
