public class PrintValue {
    public static void main(String[] args) {

        int[][] values = fillMatrix();
        printValues(values);

    }
    public static int[][] fillMatrix(){
        int[][] matrix = new int[2][];

        int[] first = {
             47,
             3,
             12
        };
        int[] second = {
                51,
                74,
                20
        };

        matrix[0] = first;
        matrix[1] = second;
        return matrix;
    }
    public static void printValues(int[][] matrix){

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                if(matrix[row][col] == 47){
                    System.out.print(matrix[row][col] + " ");
                }else if(matrix[row][col] == 51){
                    System.out.print(matrix[row][col] + " ");
                }else if(matrix[row][col] == 20){
                    System.out.print(matrix[row][col] + " ");
                }
            }
        }
    }
}
