import java.util.Scanner;

public class TracingMania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int groupCount = Integer.parseInt(scanner.nextLine());


        int allTourists = 0;
        double musala = 0;
        double monblan = 0;
        double kilimanjaro = 0;
        double k2 = 0;
        double everest = 0;


        for (int i = 1; i <= groupCount; i++) {
            int peopleInGroupCount = Integer.parseInt(scanner.nextLine());
            allTourists += peopleInGroupCount;

            if (peopleInGroupCount <= 5) {
                musala += peopleInGroupCount;
            } else if (peopleInGroupCount > 5 && peopleInGroupCount <= 12) {
                monblan += peopleInGroupCount;
            } else if (peopleInGroupCount > 12 && peopleInGroupCount <= 25) {
                kilimanjaro += peopleInGroupCount;
            } else if (peopleInGroupCount > 25 && peopleInGroupCount <= 40) {
                k2 += peopleInGroupCount;
            } else {
                everest += peopleInGroupCount;
            }

        }
        musala = musala / allTourists * 100;
        monblan = monblan / allTourists * 100;
        kilimanjaro = kilimanjaro / allTourists * 100;
        k2 = k2 / allTourists * 100;
        everest = everest / allTourists * 100;

        System.out.printf("%.2f%%\n",musala);
        System.out.printf("%.2f%%\n",monblan);
        System.out.printf("%.2f%%\n",kilimanjaro);
        System.out.printf("%.2f%%\n",k2);
        System.out.printf("%.2f%%",everest);
    }
}
