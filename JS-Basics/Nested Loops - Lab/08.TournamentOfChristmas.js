function games(input) {


    let daysCount = Number(input[0]);
    let index = 1;
    let wins = 0;
    let loses = 0;
    let winMoney = 0;
    let winnerDay = 0;
    let loserDay = 0;
    let totalMoney = 0;

    for (let i = 1; i <= daysCount; i++) {
        let command = input[index];

        while (command !== "Finish") {
            let sport = command;
            index++;
            let gameResult = input[index]
            index++;

            if (gameResult === "win") {
                wins++;
                winMoney += 20;
            } else if (gameResult === "lose") {
                loses++;

            }

            command = input[index];

        }
        index++;

        if (wins > loses) {
            winMoney += winMoney * 0.10;
            winnerDay++;
        } else {
            loserDay++;
        }
        totalMoney += winMoney;
        winMoney = 0;


        wins = 0;
        loses = 0;

    }

    if (winnerDay > loserDay) {
        totalMoney += totalMoney * 0.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }


}
games(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);
    games(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"]);