function trainingJumps(input) {

    let target = Number(input[0]);
    let targetForTraining = target - 30;
    let jumpsCount = 0;
    let correctJump = 0;
    let incorrectJump = 0;
    let isJumperFail = false;

    for (let i = 1; i < input.length; i++) {
        let currentJump = Number(input[i]);

        jumpsCount++;


        if (currentJump > targetForTraining) {
            correctJump++;
            if (targetForTraining >= target) {
                break;
            }
            targetForTraining += 5;
            incorrectJump = 0;
        } else {
            incorrectJump++;
        }

        if (incorrectJump >= 3) {
            isJumperFail = true;
            break;
        }



    }

    if (isJumperFail) {
        console.log(`Tihomir failed at ${targetForTraining}cm after ${jumpsCount} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${targetForTraining}cm after ${jumpsCount} jumps.`);
    }
}
trainingJumps(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
trainingJumps(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"]);