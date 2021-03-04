function familyTripBudget(input) {

    let budget = input[0];
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let moreCosts = Number(input[3]);


    if (nightsCount > 7) {
        nightPrice *= 0.95;
    }

    let priceForAllNights = nightsCount * nightPrice;
    let costs = moreCosts / 100 * 10;
    let budgetWithCosts = budget  * costs / 10;

    let totalPrice = priceForAllNights + budgetWithCosts;

    if (budget >= totalPrice) {
        budget -= totalPrice;
        console.log(`Ivanovi will be left with ${budget.toFixed(2)} leva after vacation.`);
    } else {
        totalPrice -= budget;
        console.log(`${totalPrice.toFixed(2)} leva needed.`);
    }


}
familyTripBudget(["500",
"7",
"66",
"15"]);