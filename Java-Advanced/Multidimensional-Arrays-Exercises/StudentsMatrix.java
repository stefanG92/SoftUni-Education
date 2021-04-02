import java.util.Scanner;

public class StudentsMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[][] students = fillStudentsInMatrix();
        printStudents(students);
    }

    public static String[][] fillStudentsInMatrix() {
        String[] studentsForFirstRow = {
                "Brice",
                "Marvin",
                "Anna",
        };
        String[] studentsForSecondRow = {
                "Kamal",
                "Maria",
                "Elissa"
        };
        String[][] matrix = new String[2][3];

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                if(row != 0){
                  matrix[row][col] = studentsForSecondRow[col];
                }else{
                    matrix[row][col] = studentsForFirstRow[col];
                }
            }
        }
        return matrix;

    }
    public static void printStudents (String[][] students) {
        for (String[] row : students) {
            for (String arr : row) {
                System.out.print(String.format("%s ",arr));
            }
            System.out.println();
        }
    }
}
