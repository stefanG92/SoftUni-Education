function ballsPoints(input) {

    let ballsCount = Number(input[0]);
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;

    let otherBalls = 0;
    let dividePoint = 0;


    for (let i = 1; i <= ballsCount; i++) {
        let colorBall = input[i];

        switch (colorBall) {
            case "red":
                points += 5;
                redBalls++;
                break;
            case "orange":
                points += 10;
                orangeBalls++;
                break;
            case "yellow":
                points += 15;
                yellowBalls++;
                break;
            case "white":
                points += 20;
                whiteBalls++;
                break;
            case "black":
                points = points / 2;
                dividePoint++;
                break;
            default:
                otherBalls++;
                break;
        }

    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls ${redBalls}`);
    console.log(`Points from orange balls ${orangeBalls}`);
    console.log(`Points from yellow balls ${yellowBalls}`);
    console.log(`Points from white balls ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${dividePoint}`);

}

ballsPoints(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);

