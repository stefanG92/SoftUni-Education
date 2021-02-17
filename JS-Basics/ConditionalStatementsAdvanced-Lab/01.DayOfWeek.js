function dayOfWeek(input) {
    let numberOfDay = Number(input[0]);

    if (numberOfDay >= 1 && numberOfDay <= 7) {

        switch (numberOfDay) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;


        }


    }else {
        console.log("Error");
    }
}
dayOfWeek(["-1"]);