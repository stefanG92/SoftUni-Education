import java.util.Scanner;

public class DataTypes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String type = scanner.nextLine();

        printResult(type,scanner);

    }

    public static void printResult(String type, Scanner scanner) {

        switch (type) {
            case "int":
                int intNumber = Integer.parseInt(scanner.nextLine());
                System.out.println(intNumber * 2);
                break;
            case "real":
                double doubleNumber = Double.parseDouble(scanner.nextLine());
                System.out.printf("%.2f", doubleNumber * 1.5);

                break;
            case "string":
                String string = scanner.nextLine();
                System.out.printf("$%s$",string);
                break;
        }
    }
}
