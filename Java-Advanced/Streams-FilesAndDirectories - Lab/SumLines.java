import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SumLines {
    public static void main(String[] args) {

        try (BufferedReader reader = new BufferedReader(new FileReader("C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\input.txt"))){

            String line = reader.readLine();

            while (line != null){
                int values = 0;

                for (int i = 0; i < line.length(); i++) {
                    values += line.charAt(i);
                }

                System.out.println(values);

                line = reader.readLine();
            }
        }catch (IOException exception){
           exception.printStackTrace();
        }
    }
}
