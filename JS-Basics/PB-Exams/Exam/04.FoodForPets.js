function foodCalculator(input) {

    let daysCount = Number(input[0]);
    let foodQunatity = Number(input[1]);

    let biscuits = 0;
    let days = 0;
    let allDogFoodEaten = 0;
    let allCatFoodEaten = 0;


    for (let index = 2; index < input.length; index++) {


       let  dogFoodEaten = Number(input[index]);
       let  catFoodEaten = Number(input[++index]);

        days++;


        if (days == 3) {
            biscuits += (dogFoodEaten + catFoodEaten) * 0.10;
        }
       
        allDogFoodEaten += dogFoodEaten;
        allCatFoodEaten += catFoodEaten;


    }

    

    let allEatenFood = allDogFoodEaten + allCatFoodEaten;

    let eatenFoodInProcent = (allEatenFood / foodQunatity) * 100;
    let dogFoodInProcent = (allDogFoodEaten / allEatenFood) * 100;
    let catFoodInProcent = (allCatFoodEaten / allEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.\n` +
        `${eatenFoodInProcent.toFixed(2)}% of the food has been eaten.\n` +
        `${dogFoodInProcent.toFixed(2)}% eaten from the dog.\n` +
        `${catFoodInProcent.toFixed(2)}% eaten from the cat.\n`);
}
foodCalculator([3,
    500,
    100,
    30,
    110,
    25,
    120,
    35]);