import java.util.Arrays;
import java.util.Scanner;

public class ParkingSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] matrixSize = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        int rows = matrixSize[0];
        int cols = matrixSize[1];

        boolean[][] isOccupied = new boolean[rows][cols];

        for (int row = 0; row < isOccupied.length; row++) {
            isOccupied[row][0] = true;
        }

        String line = scanner.nextLine();

        while (!line.equals("stop")) {
            int[] coordinates = Arrays.stream(line.split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
            int enterRow = coordinates[0];
            int desiredRow = coordinates[1];
            int desiredCol = coordinates[2];

            boolean hasFreePlace = false;

            int traveledDistance = 1;
            traveledDistance += Math.abs(desiredRow - enterRow);

            if (!isOccupied[desiredRow][desiredCol]) {
                traveledDistance += desiredCol;
                isOccupied[desiredRow][desiredCol] = true;
                hasFreePlace = true;
            } else {

                for (int i = 1; i < isOccupied[desiredRow].length; i++) {
                    if (desiredCol - i > 0 && !isOccupied[desiredRow][desiredCol - i]) {
                        isOccupied[desiredRow][desiredCol - i] = true;
                        hasFreePlace = true;
                        traveledDistance += desiredCol - i;
                        break;
                    }
                    if(desiredCol + i < isOccupied[desiredRow].length && !isOccupied[desiredRow][desiredCol + i]){
                        isOccupied[desiredRow][desiredCol + i] = true;
                        hasFreePlace = true;
                        traveledDistance += desiredCol + i;
                        break;
                    }
                }
            }

            if (hasFreePlace) {
                System.out.println(traveledDistance);
            } else {
                System.out.println(String.format("Row %d full", desiredRow));
            }

            line = scanner.nextLine();
        }


    }
}
