function sumForPoolDay(input) {

    // input
    let peopleCount = Number(input[0]);
    let taxeForEnter = Number(input[1]);
    let deckChairPrice = Number(input[2]);
    let umrellaPrice = Number(input[3]);

    // celculate price For all people
    let totalForEnter = peopleCount * taxeForEnter;

    let peopleForDeckChair = Math.ceil(peopleCount * 0.75);
    let peopleForUmrella = Math.ceil(peopleCount * 0.50);

    deckChairPrice = peopleForDeckChair * deckChairPrice;
    umrellaPrice = peopleForUmrella * umrellaPrice;

    let priceForAll = totalForEnter + deckChairPrice + umrellaPrice;

    //output
    console.log(`${priceForAll.toFixed(2)} lv.`);

}
sumForPoolDay(["21",
    "5.50",
    "4.40",
    "6.20"]);