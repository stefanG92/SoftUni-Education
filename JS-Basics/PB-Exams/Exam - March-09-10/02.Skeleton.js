function getAquata(input) {

    let minutesOfControl = Number(input[0]);
    let secondsOfControl = Number(input[1]);
    let lengthInMeters = Number(input[2]);
    let secondsForHundredMetres = Number(input[3]);


    // calculate time 

    let allControlInSeconds = minutesOfControl * 60 + secondsOfControl;
    let reducedCount = (lengthInMeters / 120) * 2.5;
    let timeOfMarin = ((lengthInMeters / 100) * secondsForHundredMetres) - reducedCount;

    // output result
    if (timeOfMarin <= allControlInSeconds) {

        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${timeOfMarin.toFixed(3)}.`);
    } else {
        let diff = timeOfMarin - allControlInSeconds;
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }


}
getAquata(["2",
    "12",
    "1200",
    "10"]);
getAquata(["1",
    "20",
    "1546",
    "12"]);