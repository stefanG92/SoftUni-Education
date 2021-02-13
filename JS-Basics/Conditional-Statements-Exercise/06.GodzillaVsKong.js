function calculateCosts(input) {

    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clotesPrice = Number(input[2]);

    let decorPrice = budget * 0.10;
    let extrasClotesPrice = extrasCount * clotesPrice;

    if (extrasCount > 150) {
        extrasClotesPrice *= 0.90;
    }

    let allCosts = decorPrice + extrasClotesPrice;

    if (budget >= allCosts) {
        budget -= allCosts;
        
        console.log("Action!");
        console.log(`Wingard starts filming with ${budget.toFixed(2)} leva left.`);
    } else {
        allCosts -= budget;

        console.log("Not enough money!");
        console.log(`Wingard needs ${allCosts.toFixed(2)} leva more.`);
    }



    console.log();
}
calculateCosts(["9587.88",
"222",
"55.68"]);
