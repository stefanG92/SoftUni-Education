function howMuchTraining(input) {

    let typeOfYear = input[0];
    let holidays = Number(input[1]);
    let weekends = Number(input[2]);

    let weekendsInSofia = 48 - weekends;
    let gameCountInSofia = weekendsInSofia * 3.0 / 4;

    let gameInTown = weekends * 1;

    let gameInHoliday = holidays * 2.0 / 3;

    let allGames = gameCountInSofia + gameInTown + gameInHoliday;

    if(typeOfYear === "leap"){
        allGames += allGames * 0.15;
    }

    console.log(Math.floor(allGames));

}
howMuchTraining(["normal",
"3",
"2"]);