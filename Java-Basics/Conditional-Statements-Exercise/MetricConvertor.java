import java.util.Scanner;

public class MetricConvertor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num = Double.parseDouble(scanner.nextLine());
        String input = scanner.nextLine();
        String output = scanner.nextLine();

        if(input.equals("mm")){
            num = num / 1000;
        }else if(input.equals("cm")){
            num = num / 100;
        }else if(input.equals("m")){
            num = num / 1;
        }
        if(output.equals("mm")){
            num = num * 1000;
        }else if(output.equals("cm")){
            num = num * 100;
        }else if(output.equals("m")){
            num = num * 1;
        }
        System.out.printf("%.3f",num);
    }
}
