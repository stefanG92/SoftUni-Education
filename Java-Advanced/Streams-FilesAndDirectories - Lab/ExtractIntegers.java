import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ExtractIntegers {
    public static void main(String[] args) {

        try (FileInputStream input = new FileInputStream("C:\\Users\\raq_k\\Desktop\\1. Read File_Resources\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt")) {

            Scanner scanner = new Scanner(input);


            while (scanner.hasNext()) {
                if (scanner.hasNextInt()) {
                    System.out.println(scanner.nextInt());
                }
                scanner.next();
            }

        } catch (IOException exception) {
            System.out.println(exception.getMessage());
        }


    }
}
