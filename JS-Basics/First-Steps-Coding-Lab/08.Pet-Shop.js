function neededMoneyForFood(input){

    let dogCount = Number (input[0]);
    let athorAnimalCount = Number (input[1]);

    let costForFood = (dogCount * 2.50) + (athorAnimalCount * 4.00);

    console.log(`${costForFood} lv.`);
}
neededMoneyForFood(["5", "4"]);