import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

public class exercise {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String addressFile = "C:\\inputs\\input.txt";


        try (FileInputStream input = new FileInputStream(addressFile)) {
            int oneByte = input.read();
            while (oneByte >= 0) {
                System.out.printf("%s ",Integer.toBinaryString(oneByte));

                oneByte = input.read();
            }
        } catch (IOException exception) {
            System.out.println(exception.getMessage());
        }
    }
}
