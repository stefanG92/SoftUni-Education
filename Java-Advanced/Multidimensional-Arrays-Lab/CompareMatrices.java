import java.util.Arrays;
import java.util.Scanner;

public class CompareMatrices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] firstMatrix = readMatrix(scanner);
        int[][] secondMatrix = readMatrix(scanner);


        if(equalOrNotEqual(firstMatrix,secondMatrix)){
            System.out.println("equal");
        }else{
            System.out.println("not equal");
        }


    }

    public static int[] readArray(Scanner scanner) {
        int[] array = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        return array;
    }

    public static int[][] readMatrix(Scanner scanner) {
        int[] tokens = readArray(scanner);
        int rows = tokens[0];
        int columns = tokens[1];
        int[][] matrix = new int[rows][columns];

        for (int i = 0; i < rows; i++) {
            matrix[i] = readArray(scanner);
        }
        return matrix;
    }

    public static void printMatrix(int[][] matrix) {

        for (int r = 0; r < matrix.length; r++) {
            int[] currentArr = matrix[r];
            for (int c = 0; c < currentArr.length; c++) {
                System.out.print(currentArr[c] + " ");
            }
            System.out.println();
        }
    }

    public static boolean equalOrNotEqual(int[][] firstMatrix, int[][] secondMatrix) {
        if (firstMatrix.length != secondMatrix.length) {
            return false;
        }
            for (int r = 0; r < firstMatrix.length; r++) {
                if (firstMatrix[r].length != secondMatrix[r].length) {
                    return false;
                }
                    for (int col = 0; col < firstMatrix[r].length; col++) {
                        if (firstMatrix[r][col] != secondMatrix[r][col]) {
                            return false;
                        }
                    }

                }


        return true;
    }

}
