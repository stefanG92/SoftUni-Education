function enoughWalk(input) {

    let minutesForWalk = Number(input[0]);
    let walkCountForDay = Number(input[1]);
    let catCaloriesForDay = Number(input[2]);

    let allMinutesForWalk = walkCountForDay * minutesForWalk;
    let burnedCalories = allMinutesForWalk * 5;

    if (catCaloriesForDay / 2 <= burnedCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`)

    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
    }


}
enoughWalk(["30",
"3",
"600"]);