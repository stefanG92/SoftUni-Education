import java.util.Arrays;
import java.util.Scanner;

public class PrintDiagonalsOfSquareMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = readMatrix(scanner);


        int row = 0, col = 0;

        // first diagonal
        while (row < matrix.length && col < matrix[row].length) {
            System.out.print(matrix[row++][col++] + " ");
        }
        System.out.println();
        row -= 1;
        col = 0;
        // second diagonal
        while (row >= 0 && col < matrix[row].length) {
            System.out.print(matrix[row--][col++] + " ");
        }

    }

    public static int[][] readMatrix(Scanner scanner) {
        int row = Integer.parseInt(scanner.nextLine());
        int[][] matrix = new int[row][row];

        for (int r = 0; r < row; r++) {
            int[] current = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
            for (int col = 0; col < current.length; col++) {
                matrix[r][col] = current[col];
            }
        }
        return matrix;
    }


}

