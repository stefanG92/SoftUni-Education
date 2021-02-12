function calculateBonusScore(input) {

    let number = Number(input[0]);

 
    let numberWithoutBonus = number;
    let bonusScore = 0;

    if (number <= 100) {

        bonusScore += 5;

    } else if (number > 100 && number < 1000) {

       bonusScore += numberWithoutBonus * 0.20;

    } else if (number > 1000) {

        bonusScore += numberWithoutBonus * 0.10;

    }

    // Additional bonus points

    if (numberWithoutBonus % 2 == 0) {
        bonusScore += 1;
    } else if (numberWithoutBonus % 10 == 5) {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(numberWithoutBonus + bonusScore)

}
calculateBonusScore(["2703"]);