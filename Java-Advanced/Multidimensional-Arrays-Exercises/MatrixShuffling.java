import java.util.Arrays;
import java.util.Scanner;

public class MatrixShuffling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[][] matrix = readMatrix(scanner);

        String line = scanner.nextLine();
        while (!line.equals("END")){
            String[] command = line.split("\\s+");


           if(!isValid(command,matrix)){
               System.out.println("Invalid input!");
               line = scanner.nextLine();
               continue;
           }else{
               swapTheMatrix (matrix,command);
           }




            line = scanner.nextLine();
        }
    }

    private static void swapTheMatrix(String[][] matrix, String[] command) {
        //cell [row1, col1] with cell [row2, col2])
        int row1 = Integer.parseInt(command[1]);
        int col1 = Integer.parseInt(command[2]);
        int row2 = Integer.parseInt(command[3]);
        int col2 = Integer.parseInt(command[4]);

        String current = matrix[row1][col1];
        matrix[row1][col1] = matrix[row2][col2];
        matrix[row2][col2] = current;
        printMatrix(matrix);



    }

    private static void printMatrix(String[][] matrix) {
        for (String[] ints : matrix) {
            for (String anInt : ints) {
                System.out.print(String.format("%s ",anInt));
            }
            System.out.println();
        }
    }

    private static String[][] readMatrix(Scanner scanner) {
        int[] matrixSize = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        String[][] matrix = new String[matrixSize[0]][matrixSize[1]];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().split("\\s+");
        }
        return matrix;
    }
    public static boolean isValid (String[] command,String[][] matrix){

        String firstWord = command[0];
        int row1 = Integer.parseInt(command[1]);
        int col1 = Integer.parseInt(command[2]);
        int row2 = Integer.parseInt(command[3]);


        if(!firstWord.equals("swap")){
            return false;
        }
        if(command.length > 5){
            return false;
        }
        if(row1 > matrix.length || col1 > matrix[row2].length){
            return false;
        }else if(row1 < 0 || col1 < 0){
            return false;
        }
        return true;

    }
}
