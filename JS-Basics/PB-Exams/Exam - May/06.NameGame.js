function winner(input) {

    let index = 0;
    let line = input[index];
    let winner = "";
    let winnerPoints = Number.MIN_VALUE;
    let pointSum = 0;

    while (line !== "Stop") {
        let nameOfPlayer = line;
        index++;

        let lengthName = nameOfPlayer.length;

        for (let i = 0; i < lengthName; i++) {
            let letterValue = nameOfPlayer.charCodeAt(i);
            let playerPoint = Number(input[i + 1]);

            if (playerPoint == letterValue) {
                pointSum += 10;
            } else {
                pointSum += 2;
            }

            if (letterValue == playerPoint) {

            }
        }
        index += lengthName;


        if (pointSum >= winnerPoints) {
            winnerPoints = pointSum;
            winner = nameOfPlayer;

        }
        pointSum = 0;

        line = input[index];
    }

    console.log(`The winner is ${winner} with ${winnerPoints} points!`);
}

winner(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"]);
