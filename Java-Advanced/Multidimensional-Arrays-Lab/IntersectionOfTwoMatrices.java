import java.util.Scanner;

public class IntersectionOfTwoMatrices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());
        int cols = Integer.parseInt(scanner.nextLine());

        char[][] firstMatrix = readMatrix(scanner,rows,cols);
        char[][] secondMatrix = readMatrix(scanner,rows,cols);


        printMatrix(intersectingElements(firstMatrix,secondMatrix,rows,cols));


    }

    public static char[][] readMatrix(Scanner scanner,int rows,int cols) {

        char[][] matrix = new char[rows][cols];

        for (int i = 0; i < rows; i++) {
            matrix[i] = readArray(scanner);
        }
        return matrix;
    }


    public static char[] readArray(Scanner scanner) {
        String input = scanner.nextLine();
        String[] splitElements = input.split("\\s+");
        char[] elements = new char[input.length()];

        for (int i = 0; i < splitElements.length; i++) {
            elements[i] = splitElements[i].charAt(0);
        }
        return elements;
    }


    public static void printMatrix(char[][] matrix) {

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                char element = matrix[row][col];
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }

    public static char[][] intersectingElements (char[][] first, char[][] second,int rows,int cols){
       char[][] finalMatrix = new char[rows][cols];

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                char firstElement = first[row][col];
                char secondElement = second[row][col];
                finalMatrix[row][col] = firstElement == secondElement
                        ? firstElement
                        : '*';
            }
        }
        return finalMatrix;
    }

}
