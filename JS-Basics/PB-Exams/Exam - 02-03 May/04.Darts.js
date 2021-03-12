function dartsPoints(input) {

    let playerName = input[0];
    let currentPlayerPoints = 301;

    let index = 1;
    let command = input[index];
    let correctShot = 0;
    let fallShot = 0;
    let isWinGame = true;


    while (currentPlayerPoints > 0) {
        let field = command;
        index++;
        let points = Number(input[index]);
        index++;

        if (command === "Retire") {
            break;
        }



        switch (field) {
            case "Single":

                if (points <= currentPlayerPoints) {
                    currentPlayerPoints -= points;
                    correctShot++;
                } else {
                    fallShot++;
                }

                break;
            case "Double":

                points *= 2;
                if (points <= currentPlayerPoints) {
                    currentPlayerPoints -= points;
                    correctShot++;
                } else {
                    fallShot++;
                }
                break;
            case "Triple":

                points *= 3;
                if (points <= currentPlayerPoints) {
                    currentPlayerPoints -= points;
                    correctShot++;
                } else {
                    fallShot++;
                }
                break;

        }




        command = input[index];
    }

    if (command !== "Retire") {
        console.log(`${playerName} won the leg with ${correctShot} shots.`);
    } else if (command === "Retire") {
        console.log(`${playerName} retired after ${fallShot} unsuccessful shots.`);
    }

}
dartsPoints(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"]);
dartsPoints(["Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"]);
dartsPoints(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"]);