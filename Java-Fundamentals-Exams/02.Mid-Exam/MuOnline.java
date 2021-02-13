import java.util.Scanner;

public class MuOnline {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] rooms = scanner.nextLine().split("\\|");

        int health = 100;
        int bitcoin = 0;
        boolean isLivePlayer = true;
        int roomsCount = 0;

        for (int i = 0; i < rooms.length; i++) {
            String[] commandArray = rooms[i].split(" ");

            String command = commandArray[0];
            boolean isMonster = true;


            switch (command) {
                case "potion":
                    isMonster = false;
                    int healthUp = Integer.parseInt(commandArray[1]);
                    health += healthUp;


                    if (health > 100) {
                        int moreHealth = health - 100;
                        health = 100;
                        System.out.printf("You healed for %d hp.%n", healthUp - moreHealth);
                        System.out.printf("Current health: %d hp.%n", health);
                    } else {
                        System.out.printf("You healed for %d hp.%n", healthUp);
                        System.out.printf("Current health: %d hp.%n", health);
                    }

                    roomsCount ++;

                    break;

                case "chest":
                    isMonster = false;
                    int findBitcoins = Integer.parseInt(commandArray[1]);
                    bitcoin += findBitcoins;

                    System.out.printf("You found %d bitcoins.%n", findBitcoins);

                    roomsCount ++;
                    break;

            }
            if (isMonster) {
                int monsterAttack = Integer.parseInt(commandArray[1]);


                health -= monsterAttack;

                if (health != 0) {
                    System.out.printf("You slayed %s.%n", command);
                    roomsCount ++;
                } else {
                    System.out.printf("You died! Killed by %s.%n", command);
                    System.out.printf("Best room: %d%n", roomsCount + 1);
                    isLivePlayer = false;
                    break;
                }

            }


        }
//"You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".
        if (isLivePlayer) {
            System.out.println("You've made it!");
            System.out.printf("Bitcoins: %d%n", bitcoin);
            System.out.printf("Health: %d%n", health);
        }
    }
}
