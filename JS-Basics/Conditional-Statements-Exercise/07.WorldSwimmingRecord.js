function record(input) {

    let recordSeconds = Number(input[0]);
    let metres = Number(input[1]);
    let secondsForMetre = Number(input[2]);

    //забавя на всеки 15 м. с 12.5 секунди

    let swimmerTime = metres * secondsForMetre;

    let timeWithResistance = Math.floor(metres / 15);
    timeWithResistance *= 12.5;

    swimmerTime += timeWithResistance;

    if (swimmerTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${swimmerTime.toFixed(2)} seconds.`);
    } else {
        swimmerTime -= recordSeconds;
        console.log(`No, he failed! He was ${swimmerTime.toFixed(2)} seconds slower.`);

    }

}
record(["55555.67",
"3017",
"5.03"]);