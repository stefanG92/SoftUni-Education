import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

public class LineNumbers {
    private static final String INPUT_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\inputLineNumbers.txt";
    private static final String OUTPUT_PATH = "C:\\Users\\raq_k\\Desktop\\output.txt";
    public static void main(String[] args) {


        try (BufferedReader reader = new BufferedReader(new FileReader(INPUT_PATH));
             PrintWriter printer = new PrintWriter(OUTPUT_PATH)){

            String line = reader.readLine();
            int numberLine = 1;

            while (line != null){
                printer.printf("%d. %s%n",numberLine,line);
                numberLine++;

                line = reader.readLine();
            }

        }catch (IOException exception){
            exception.printStackTrace();
        }
    }
}
