function mountainRunRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let runnerTimeForMeter = Number(input[2]);


    let runnerTimer = distanceInMetres * runnerTimeForMeter;
    let runnerDelay = Math.floor(distanceInMetres / 50) * 30;
    let totalRunnerTime = runnerTimer + runnerDelay;

    if(totalRunnerTime < recordInSeconds){
        console.log(`Yes! The new record is ${totalRunnerTime.toFixed(2)} seconds.`);
    }else {
        let diff = totalRunnerTime - recordInSeconds;
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
mountainRunRecord(["1377",
"389",
"3"]);