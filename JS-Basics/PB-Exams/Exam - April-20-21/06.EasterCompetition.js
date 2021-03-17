function easterCompetition(input) {

    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;

    let bestCook = "";
    let bestPoints = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < easterBreadCount; i++) {
        let cookName = input[index];
        index++;
        let command = input[index];

        let sumPoints = 0;

        while (command !== "Stop") {
            let points = Number(command);

            sumPoints += points;


            index++;
            command = input[index];
        }
        console.log(`${cookName} has ${sumPoints} points.`);

        if (sumPoints > bestPoints) {
            bestCook = cookName;
            bestPoints = sumPoints;
            console.log(`${bestCook} is the new number 1!`);
        }
        index++;
    }

    console.log(`${bestCook} won competition with ${bestPoints} points!`);

}
easterCompetition(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);