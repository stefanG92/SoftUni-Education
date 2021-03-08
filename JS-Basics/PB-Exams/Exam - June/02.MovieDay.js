function movieDay(input) {

    let timeForPicture = Number(input[0]);
    let sceneCount = Number(input[1]);
    let sceneTime = Number(input[2]);


    let workToTeren = timeForPicture * 0.15;
    let timeForAllScene = sceneCount * sceneTime;

    let filmTime = workToTeren + timeForAllScene;

    if (filmTime <= timeForPicture) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForPicture - filmTime)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(filmTime - timeForPicture)} minutes.`);
    }

}
movieDay(["120",
"10",
"11"]);
movieDay(["60",
"15",
"3"]);