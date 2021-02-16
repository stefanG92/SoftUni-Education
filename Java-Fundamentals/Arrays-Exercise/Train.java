import java.util.Scanner;

public class Train {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countWagon = Integer.parseInt(scanner.nextLine());


        int[] peopleOnWagon = new int[countWagon];
        int allPeople = 0;

        for (int i = 0; i < countWagon; i++) {
            peopleOnWagon[i] = Integer.parseInt(scanner.nextLine());
            allPeople += peopleOnWagon[i];

        }

        for (int wagon : peopleOnWagon) {
            System.out.print(wagon + " ");
        }
        System.out.println();
        System.out.println(allPeople);
    }
}







