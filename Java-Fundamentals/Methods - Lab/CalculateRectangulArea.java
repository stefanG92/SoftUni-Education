import java.util.Scanner;

public class CalculateRectangulArea {
    public static double areaIs (double length,double width){
        double area = length * width;
        return area;
    }
    public static void printLine (double result){
        System.out.printf("%.0f",result);
    }



    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());

      printLine(areaIs(length,width));
    }
}
