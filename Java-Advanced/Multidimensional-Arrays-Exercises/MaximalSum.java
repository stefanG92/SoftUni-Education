import java.util.Arrays;
import java.util.Scanner;

public class MaximalSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = readMatrix(scanner);

        int maxSum = Integer.MIN_VALUE;
        int[] vector = new int[2];


        for (int row = 0; row < matrix.length - 2; row++) {
            for (int col = 0; col < matrix[row].length - 2; col++) {
                int[] start = new int[]{row, col};
                if (findSum(start, matrix) > maxSum) {
                    maxSum = findSum(start, matrix);
                    vector = start;
                }
            }
        }
        System.out.printf("Sum = %d%n",maxSum);
        printMatrix(matrix,vector);

    }

    private static int findSum(int[] vector, int[][] matrix) {
        int sum = 0;
        int startRows = vector[0];
        int startCols = vector[1];

        for (int row = vector[0]; row < vector[0] + 3; row++) {
            for (int col = vector[1]; col < vector[1] + 3; col++) {
                sum+= matrix[row][col];
            }
        }
        return sum;
    }

    public static int[][] readMatrix(Scanner scanner) {

        int[] sizeOfMatrix = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        int[][] matrix = new int[sizeOfMatrix[0]][sizeOfMatrix[1]];
        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
        }
        return matrix;
    }
    public static void printMatrix (int[][] matrix,int[] vector){
        for (int row = vector[0]; row < vector[0] + 3; row++) {
            for (int col = vector[1]; col < vector[1] + 3; col++) {
                System.out.print(String.format("%d ",matrix[row][col]));
            }
            System.out.println();
        }
    }

}
