function goldMine(input) {

    let index = 0;
    let locationCount = Number(input[index]);
    index++;


    for (let i = 0; i < locationCount; i++) {
        let expectedGoldForDay = Number(input[index]);
        index++;
        let daysCount = Number(input[index]);
        index++;

        let averageGold = 0;

        for (let j = 0; j < daysCount; j++) {
            let goldForTheDay = Number(input[index]);
            index++;

            averageGold += goldForTheDay;


        }

        averageGold = averageGold / daysCount;

        if (averageGold >= expectedGoldForDay) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);


        } else {
            let diff = expectedGoldForDay - averageGold;
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }



    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
    goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"]);