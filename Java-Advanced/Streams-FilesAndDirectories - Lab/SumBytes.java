import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SumBytes {
    public static void main(String[] args) {

        try (BufferedReader reader = new BufferedReader(new FileReader("C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\input.txt"))){

            String line = reader.readLine();
            long byteValues = 0;

            while (line != null){

                int sum = 0;
                for (int i = 0; i < line.length(); i++) {
                    sum += line.charAt(i);
                }
                byteValues += sum;

                line = reader.readLine();
            }
            System.out.println(byteValues);

        }catch (IOException exception){
            exception.printStackTrace();
        }
    }
}
