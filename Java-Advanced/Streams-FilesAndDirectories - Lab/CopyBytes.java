import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

public class CopyBytes {
    public static void main(String[] args) {


        try (FileInputStream input = new FileInputStream("C:\\inputs\\input.txt")) {
            PrintWriter writer = new PrintWriter("C:\\Users\\raq_k\\Desktop\\1. Read File_Resources\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\03.CopyBytesOutput.txt");
            int oneByte = input.read();
            String digits = String.valueOf(oneByte);
            while (oneByte >= 0) {

                if(oneByte != 32 && oneByte != 10){
                    writer.print(oneByte);
                }else {
                    writer.print((char) oneByte);
                }


                oneByte = input.read();
            }
        } catch (IOException exception) {
            System.out.println(exception.getMessage());
        }
    }
}
