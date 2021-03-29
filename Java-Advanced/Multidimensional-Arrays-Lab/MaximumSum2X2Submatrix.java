import java.util.Arrays;
import java.util.Scanner;

public class MaximumSum2X2Submatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = readMatrix(scanner);

        int maxSum = Integer.MIN_VALUE;

        int maxRow = 0, maxCol = 0;

        for (int row = 0; row < matrix.length - 1; row++) {
            for (int col = 0; col < matrix[row].length - 1; col++) {
                int sum = matrix[row][col] + matrix[row][col + 1]
                        + matrix[row + 1][col] + matrix[row + 1][col + 1];

               if(sum > maxSum){
                   maxSum = sum;
                   maxRow = row;
                   maxCol = col;
               }
            }
        }
        System.out.println(matrix[maxRow][maxCol] + " " + matrix[maxRow][maxCol + 1]);
        System.out.println(matrix[maxRow + 1][maxCol] + " " + matrix[maxRow + 1][maxCol + 1]);

        System.out.println(maxSum);

    }
    public static int[][] readMatrix (Scanner scanner){
        int[] rowsAndCols = Arrays.stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt).toArray();
        int rows = rowsAndCols[0];
        int cols = rowsAndCols[1];

        int[][] matrix = new int[rows][cols];

        for (int row = 0; row < rows; row++) {
            matrix[row] = Arrays.stream(scanner.nextLine().split(", "))
                    .mapToInt(Integer::parseInt).toArray();
        }
        return matrix;
    }

}
