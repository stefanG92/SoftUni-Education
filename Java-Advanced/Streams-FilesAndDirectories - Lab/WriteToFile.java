import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class WriteToFile {
    public static void main(String[] args) {
        String path = "C:\\inputs\\input.txt";

        List<Character> skipElements = new ArrayList<>();
        skipElements.add(',');
        skipElements.add('.');
        skipElements.add('?');
        skipElements.add('!');

        try {
            FileInputStream input = new FileInputStream(path);
            int oneByte = input.read();
            FileOutputStream output = new FileOutputStream("output.txt");
            PrintWriter writer = new PrintWriter(output);

            while (oneByte >= 0){

                if(!skipElements.contains((char) oneByte)){
                    output.write(oneByte);
                }
                oneByte = input.read();
            }
            writer.println(oneByte);


        }catch (IOException ex){
            System.out.println(ex.getMessage());
        }
    }
}
