import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class SoftUniParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        Set<String> vipGuests = new TreeSet<>();
        Set<String> regularGuests = new TreeSet<>();

        while (!line.equalsIgnoreCase("party")){

            if(Character.isDigit(line.charAt(0))){
                // Vip guests
                vipGuests.add(line);
            }else {
                // regular guests
                regularGuests.add(line);
            }


            line = scanner.nextLine();
        }
        line = scanner.nextLine();

        while (!line.equalsIgnoreCase("end")){

            if(Character.isDigit(line.charAt(0))){
                // Vip guests
                vipGuests.remove(line);
            }else {
                // regular guests
                regularGuests.remove(line);
            }

            line = scanner.nextLine();
        }
        printGuest(vipGuests,regularGuests);

    }
    public static void printGuest (Set<String> vipGuests,Set<String> regularGuests){

        System.out.println(vipGuests.size() + regularGuests.size());
        if(!vipGuests.isEmpty()){
            vipGuests.stream().forEach(e -> System.out.println(e));
        }
        if(!regularGuests.isEmpty()){
            regularGuests.stream().forEach(e -> System.out.println(e));
        }
    }
}
