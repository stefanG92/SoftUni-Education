function costsForBags(input) {

    let priceForTwentyKg = Number(input[0]);
    let bagsKg = Number(input[1]);
    let daysOfTravel = Number(input[2]);
    let bagsCount = Number(input[3]);

    // до 10кг – 20% от цената на багаж над 20кг
    // между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
    // над 20кг – таксата се чете от конзолата
    let priceForBags = 0;

    if (bagsKg > 0 && bagsKg < 10) {
        priceForBags = priceForTwentyKg * 0.20;
    } else if (bagsKg >= 10 && bagsKg <= 20) {
        priceForBags = priceForTwentyKg / 2;
    } else if (bagsKg > 20) {
        priceForBags = priceForTwentyKg;
    }

    // повече от 30 дни - цената на багажа се оскъпява с 10%
    // между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%
    // по-малко от 7 дни - цената на багажа се оскъпява с 40%

    if (daysOfTravel > 30) {
        priceForBags += priceForBags * 0.10;
    } else if (daysOfTravel >= 7 && daysOfTravel <= 30) {
        priceForBags += priceForBags * 0.15;
    } else if (daysOfTravel < 7) {
        priceForBags += priceForBags * 0.40;
    }

    let totalCosts = bagsCount * priceForBags;

    console.log(`The total price of bags is: ${totalCosts.toFixed(2)} lv.`);

}
costsForBags(["25.50",
"5",
"36",
"6"]);