function equipmentPrice(input) {

    let tennisRocketPrice = Number(input[0]);
    let tennisRocketsCount = Number(input[1]);
    let shoesCount = Number(input[2]);

    // calculate costs 

    let rocketsPrice = tennisRocketsCount * tennisRocketPrice;
    let shoesPrice = shoesCount * (tennisRocketPrice / 6);
    let otherProductsPrice = (rocketsPrice + shoesPrice) * 0.20;
    let totalCosts = rocketsPrice + shoesPrice + otherProductsPrice;

    // output total Costs

    console.log(`Price to be paid by Djokovic ${Math.floor(totalCosts / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalCosts * 7/8)}`);

}
equipmentPrice(["850",
"4",
"2"]);