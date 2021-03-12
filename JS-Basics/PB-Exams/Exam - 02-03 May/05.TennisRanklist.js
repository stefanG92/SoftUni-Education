function tournamentPoints(input) {

    let index = 0;
    let daysTournamentCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let winerTournament = 0;
    let averagePoints = 0;


    for (let i = 0; i < daysTournamentCount; i++) {
        let partOfTournament = input[index];
        index++;

        // W - ако е победител получава 2000 точки
        // F - ако е финалист получава 1200 точки
        // SF - ако е полуфиналист получава 720 точки
        switch (partOfTournament) {
            case "W":
                averagePoints += 2000;
                winerTournament++;
                break;
            case "F":
                averagePoints += 1200;
                break;
            case "SF":
                averagePoints += 720;
                break;
        }


    }
    winerTournament = winerTournament / daysTournamentCount * 100;


console.log(`Final points: ${startPoints + averagePoints}`);
console.log(`Average points: ${Math.floor(averagePoints / daysTournamentCount)}`);
console.log(`${winerTournament.toFixed(2)}%`);





}
tournamentPoints(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);