import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

public class CountCharactersType {
    private static final String INPUT_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\input.txt";
    private static final String OUTPUT_PATH = "C:\\Users\\raq_k\\Desktop\\output.txt";

    public static void main(String[] args) {

        try (BufferedReader reader = new BufferedReader(new FileReader(INPUT_PATH));
             PrintWriter print = new PrintWriter(OUTPUT_PATH)) {

            int vowels = 0;
            int consonants = 0;
            int punctuation = 0;

            String line = reader.readLine();

            while (line != null) {

                for (int i = 0; i < line.length(); i++) {
                    char currentCharacter = line.charAt(i);

                    //⦁	a, e, i, o, u
                    if(currentCharacter != ' '){
                        if (currentCharacter == 'a' || currentCharacter == 'e' || currentCharacter == 'i' ||
                                currentCharacter == 'o' || currentCharacter == 'u') {
                            vowels++;
                        } else if (currentCharacter == '!' || currentCharacter == ',' || currentCharacter == '.' ||
                                currentCharacter == '?') {
                            punctuation++;
                        }else {
                            consonants++;
                        }
                    }

                }

                line = reader.readLine();
            }

//            Vowels: 41
//            Consonants: 72
//            Punctuation: 6
            print.printf("Vowels: %d%n" + "Consonants: %d%n" + "Punctuation: %d%n",vowels,consonants,punctuation);

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
