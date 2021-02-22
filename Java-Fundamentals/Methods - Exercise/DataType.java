import java.util.Scanner;

public class DataType {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        int number = 0;
        double realNumber = 0;
        String line = "";
        boolean flag = false;

        switch (command) {
            case "int":
                number = Integer.parseInt(scanner.nextLine());
                flag = true;
                break;
            case "real":
                realNumber = Double.parseDouble(scanner.nextLine());
                flag = true;
                break;
            case "string":
                line = scanner.nextLine();
                flag = true;
                break;
        }
        if(flag){
           operationWithNumbers(number,realNumber,command,line);
        }

    }

    public static void operationWithNumbers(int numbers, double realNumbers, String command, String line) {

        switch (command) {
            case "int":
                System.out.println(numbers * 2);
                break;

            case "real":
                System.out.printf("%.2f",realNumbers * 1.5);
                break;

            case "string":
                System.out.println("$" + line + "$");
        }

    }
}

