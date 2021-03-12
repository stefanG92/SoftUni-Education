function matchResult(input) {

    let wins = 0;
    let lose = 0;
    let drawn = 0;

    for (let i = 0; i < 3; i++) {
        let currentMatch = input[i];

        let goalsForFirstPlayer = Number(currentMatch.charAt(0));
        let goalsForSecondPlayer = Number(currentMatch.charAt(currentMatch.length - 1));

        if (goalsForFirstPlayer > goalsForSecondPlayer) {
            wins++;
        } else if (goalsForFirstPlayer < goalsForSecondPlayer) {
            lose++;
        } else if (goalsForFirstPlayer == goalsForSecondPlayer) {
            drawn++;
        }

    }
    console.log(`Team won ${wins} games.`)
    console.log(`Team lost ${lose} games.`)
    console.log(`Drawn games: ${drawn}`);


}
matchResult(["4:2",
"0:3",
"1:0"]);