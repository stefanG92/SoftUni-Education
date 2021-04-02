public class PrintRowsAndCols {
    public static void main(String[] args) {
        String[][] arr = { {"hello","there","world"},
                {"how","are","you"} };

        printArr(arr);
        System.out.println("Rows:" + arr.length);
        System.out.println("Columns:" + arr[0].length);



    }
    public static void printArr (String[][] arr){
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }

}
