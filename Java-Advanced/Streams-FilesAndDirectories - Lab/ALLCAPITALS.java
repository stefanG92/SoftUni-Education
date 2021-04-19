import java.io.*;

public class ALLCAPITALS {
    private static final String INPUT_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\input.txt";
    private static final String OUTPUT_PATH = "C:\\Users\\raq_k\\Desktop\\output.txt";
    public static void main(String[] args) {

        try (BufferedReader reader = new BufferedReader(new FileReader(INPUT_PATH));
        PrintWriter writer = new PrintWriter(OUTPUT_PATH)){

            String line = reader.readLine();

            while (line != null){

                writer.println(line.toUpperCase());

                line = reader.readLine();
            }



        }catch (IOException ex){
            ex.printStackTrace();
        }
    }
}
