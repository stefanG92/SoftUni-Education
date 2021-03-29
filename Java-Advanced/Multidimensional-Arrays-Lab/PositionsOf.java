import java.util.Arrays;
import java.util.Scanner;

public class PositionsOf {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = readMatrix(scanner);
        int numberForFind = Integer.parseInt(scanner.nextLine());

        if (!isFindNumber(matrix, numberForFind)) {
            System.out.println("not found");
        }


    }

    public static int[][] readMatrix(Scanner scanner) {
        int[] tokens = readArray(scanner);
        int rows = tokens[0];
        int col = tokens[1];
        int[][] matrix = new int[rows][col];

        for (int r = 0; r < rows; r++) {
            matrix[r] = readArray(scanner);
        }
        return matrix;
    }

    public static int[] readArray(Scanner scanner) {
        return Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
    }

    public static boolean isFindNumber(int[][] matrix, int findNumber) {

        boolean isFind = false;
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                if (findNumber == matrix[r][c]) {
                    System.out.println(r + " " + c);
                    isFind = true;
                }
            }
        }
        return isFind;
    }
}
