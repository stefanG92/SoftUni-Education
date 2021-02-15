function howMuchIsTime(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let allTimeInMinutes = hours * 60 + minutes;

    let timeWillBe = allTimeInMinutes + 15;

    let currentHour = Math.trunc(timeWillBe / 60);
    let currentMinutes = timeWillBe % 60;

    if (currentMinutes < 10 && currentHour <= 23) {

        console.log(`${currentHour}` + ":" + "0" + `${currentMinutes}`);


    } else if (currentMinutes < 10 && currentHour > 23) {
        currentHour = 0;
        console.log(`${currentHour}` + ":" + "0" + `${currentMinutes}`);

    } else if (currentMinutes >= 10 && currentHour <= 23) {
        console.log(`${currentHour}` + ":" + `${currentMinutes}`)
    } else if (currentMinutes >= 10 && currentHour > 23) {
        currentHour = 0;
        console.log(`${currentHour}` + ":" + `${currentMinutes}`);

    }



}


howMuchIsTime(["23", "44"]);