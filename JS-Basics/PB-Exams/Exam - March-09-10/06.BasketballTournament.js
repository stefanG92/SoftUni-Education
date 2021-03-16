function tournamentResult(input) {

    let index = 0;
    let command = input[index];

    let winsCount = 0;
    let losesCount = 0;
    let allGames = 0;


    while (command !== "End of tournaments") {
        let tournamentName = command;
        index++;
        let matchesCount = Number(input[index]);
        index++;

        let gameCount = 0;

        for (let i = 0; i < matchesCount; i++) {
            let desiTeamScore = Number(input[index]);
            index++;
            let enemyTeamScore = Number(input[index]);
            index++;

            gameCount++;

            if (desiTeamScore > enemyTeamScore) {
                console.log(`Game ${gameCount} of tournament ${tournamentName}: win with ${desiTeamScore - enemyTeamScore} points.`);
                winsCount++;
            } else {
                console.log(`Game ${gameCount} of tournament ${tournamentName}: lost with ${enemyTeamScore - desiTeamScore} points.`);
                losesCount++;
            }


        }
        allGames += gameCount;


        command = input[index];
    }


    winsCount = winsCount / allGames * 100;
    losesCount = losesCount / allGames * 100;

    console.log(`${winsCount.toFixed(2)}% matches win`);
    console.log(`${losesCount.toFixed(2)}% matches lost`);

}
tournamentResult(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"]);