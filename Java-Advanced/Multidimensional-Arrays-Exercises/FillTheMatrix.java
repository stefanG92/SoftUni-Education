import java.util.Scanner;

public class FillTheMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] inputArr = scanner.nextLine().split(", ");
        int rows = Integer.parseInt(inputArr[0]);
        String fillPattern = inputArr[1];

        switch (fillPattern) {
            case "A":
                fillPatternA(rows);
                break;
            case "B":
                fillPatternB(rows);
                break;
        }



    }

    private static void fillPatternA(int rows) {
        int numberForFill = 1;
        int[][] matrix = new int[rows][rows];

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                matrix[col][row] = numberForFill++;
            }
        }
        printMatrix(matrix);


    }

    private static void fillPatternB(int rows) {
        int numberForFill = 1;
        int[][] matrix = new int[rows][rows];

        for (int row = 0; row < matrix.length; row++) {
            if(row % 2 == 0){
                for (int col = 0; col < matrix[row].length; col++) {
                    matrix[col][row] = numberForFill++;
                }
            }else{
                for (int col = matrix[row].length - 1; col >= 0 ; col--) {
                    matrix[col][row]  = numberForFill++;
                }
            }

        }
        printMatrix(matrix);
    }


    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.printf("%d ", element);
            }
            System.out.println();
        }
    }
}
