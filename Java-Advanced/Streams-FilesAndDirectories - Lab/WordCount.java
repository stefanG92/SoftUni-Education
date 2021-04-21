import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class WordCount {
    private static final String INPUT_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources\\text.txt";
    private static final String OUTPUT_PATH = "C:\\Users\\raq_k\\Desktop\\output.txt";
    private static final String WORDS_PATH = "C:\\Users\\raq_k\\Downloads\\1. Sum Lines_Resources\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\words.txt";

    public static void main(String[] args) {

        try (BufferedReader textReader = new BufferedReader(new FileReader(INPUT_PATH));
             BufferedReader wordsReader = new BufferedReader(new FileReader(WORDS_PATH));
             PrintWriter printer = new PrintWriter(OUTPUT_PATH)) {

            String[] words = wordsReader.readLine().split("\\s+");
            Map<String, Integer> wordsOccurrences = new LinkedHashMap<>();
            for (String word : words) {
                wordsOccurrences.put(word, 0);
            }

            String[] textWords = textReader.readLine().split("\\s+");
            for (String textWord : textWords) {
                if(wordsOccurrences.containsKey(textWord)){
                   wordsOccurrences.put(textWord,wordsOccurrences.get(textWord) + 1);
                }
            }

            wordsOccurrences.entrySet().stream()
                    .sorted((w1,w2) -> w2.getValue().compareTo(w1.getValue()))
                    .forEach(w -> printer.printf("%s - %d%n",w.getKey(),w.getValue()));


        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }
}
