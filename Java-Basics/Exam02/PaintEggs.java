import java.util.Scanner;

public class PaintEggs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int paintEggsCount = Integer.parseInt(scanner.nextLine());


int redCount = 0;
int orangeCount = 0;
int blueCount = 0;
int greenCount = 0;
int maxCount = Integer.MIN_VALUE;

String color = "";

        for (int i = 0; i < paintEggsCount; i++) {
            String colorOfEggs = scanner.nextLine();

            switch (colorOfEggs) {
                case "red":
                    redCount++;
                    break;
                case "orange":
                    orangeCount++;
                    break;
                case "blue":
                    blueCount++;
                    break;
                case "green":
                    greenCount++;
                    break;
            }
                if (redCount > maxCount) {
                    maxCount = redCount;
                    color = "red";
                }

            if (orangeCount > maxCount) {
                    maxCount = orangeCount;
                    color = "orange";
                }

                if (blueCount > maxCount) {
                    maxCount = blueCount;
                    color = "blue";
                }

                if (greenCount > maxCount) {
                    maxCount = greenCount;
                    color = "green";
                }
            }
        System.out.printf("Red eggs: %d%n",redCount);
        System.out.printf("Orange eggs: %d%n",orangeCount);
        System.out.printf( "Blue eggs: %d%n",blueCount);
        System.out.printf(  "Green eggs: %d%n",greenCount);
        System.out.printf( "Max eggs: %d -> %s",maxCount,color);
        }
    }

