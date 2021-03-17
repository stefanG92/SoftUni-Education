function shopForGuests(input) {

    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let neededEasterBread = Math.ceil(guestsCount / 3);
    let neededEggs = guestsCount * 2;

    let easterBreadPrice = neededEasterBread * 4;
    let eggsPrice = neededEggs * 0.45;

    let neededMoney = easterBreadPrice + eggsPrice;

    if (neededEggs <= budget) {
        let diff = budget - neededMoney;
        console.log(`Lyubo bought ${neededEasterBread} Easter bread and ${neededEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        let diff = neededMoney - budget;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
shopForGuests(["9",
"12"]);