import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

public class MergeTwoFile {

    private static final String INPUT_ONE_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\inputOne.txt";
    private static final String INPUT_TWO_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\inputTwo.txt";
    private static final String OUTPUT_PATH = "C:\\Users\\raq_k\\Desktop\\output.txt";

    public static void main(String[] args) {

        try (BufferedReader readerOne = new BufferedReader(new FileReader(INPUT_ONE_PATH));
        BufferedReader readerTwo = new BufferedReader(new FileReader(INPUT_TWO_PATH));
             PrintWriter printer = new PrintWriter(OUTPUT_PATH)){


            String lineOne = readerOne.readLine();


            while (lineOne != null){
                printer.println(lineOne);

                lineOne = readerOne.readLine();
            }
            String lineTwo = readerTwo.readLine();
            while (lineTwo != null){
                printer.println(lineTwo);

                lineTwo = readerTwo.readLine();
            }

        }catch (IOException exception){
            exception.printStackTrace();
        }
    }
}
