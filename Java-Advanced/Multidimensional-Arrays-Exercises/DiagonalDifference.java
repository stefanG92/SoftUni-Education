import java.util.Arrays;
import java.util.Scanner;

public class DiagonalDifference {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = readMatrix(scanner);

        System.out.println(getDifference(matrix));
    }

    public static int[][] readMatrix(Scanner scanner) {
        int n = Integer.parseInt(scanner.nextLine());
        int[][] matrix = new int[n][];

        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
        }
        return matrix;
    }
    public static int sumFromPrimaryDiagonal (int[][] matrix){
        int sum = 0;

        for (int i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
        }
        return sum;
    }
    public static int sumFromSecondaryDiagonal(int[][] matrix){
        int sum = 0;

        int row = 0;
        int col = matrix.length - 1;

        while (row < matrix.length && col >= 0){
            sum += matrix[row][col];
            row++;
            col--;
        }


        return sum;
    }
    public static int getDifference (int[][] matrix){
        int firstSum = sumFromPrimaryDiagonal(matrix);
        int secondSum = sumFromSecondaryDiagonal(matrix);
        int difference = 0;
        if(firstSum > secondSum){
            return difference = firstSum - secondSum;
        }else {
            return difference = secondSum - firstSum;
        }
    }

}
