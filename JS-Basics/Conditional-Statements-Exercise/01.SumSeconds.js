function sumTimeInMinutes(input) {

    // time of players in seconds
    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);
    let thirdPlayer = Number(input[2]);

    let totalTime = firstPlayer + secondPlayer + thirdPlayer;

    // time in minutes
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:` + "0" + `${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sumTimeInMinutes(["22", "7",
    "34"]);
