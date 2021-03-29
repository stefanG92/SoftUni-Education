import java.util.Arrays;
import java.util.Scanner;

public class SumMatrixElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        int[][] matrix = readMatrix(scanner);
        System.out.println(sumOfMatrixElement(matrix));


    }

    public static int[][] readMatrix(Scanner scanner) {
        int[] rowsAndCols = readArray(scanner);
        int rows = rowsAndCols[0];
        int[][] matrix = new int[rows][];

        for (int i = 0; i < rows; i++) {
            matrix[i] = readArray(scanner);
        }
        printArray(rowsAndCols);

        return matrix;
    }

    public static int[] readArray(Scanner scanner) {
        int[] input = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt).toArray();
        return input;
    }

    public static int sumOfMatrixElement(int[][] matrix) {
        int sum = 0;

        for (int r = 0; r < matrix.length; r++) {
            int[] currentArray = matrix[r];
            for (int c = 0; c < currentArray.length; c++) {
                sum += currentArray[c];
            }
        }
        return sum;
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
