import java.util.Scanner;

public class Gender {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double age = Double.parseDouble(scanner.nextLine());
        String sex = scanner.nextLine();


        if (sex.equals("f")) {
            if (age < 16) {
                System.out.println("Miss");
            } else {
                System.out.println("Ms.");
            }
        }else if (sex.equals("m")) {
                if (age < 16) {
                    System.out.println("Master");
                } else {
                    System.out.println("Mr.");
                }
            }
        }
    }




