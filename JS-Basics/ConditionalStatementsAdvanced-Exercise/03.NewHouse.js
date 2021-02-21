function flowersPrice(input) {

    let typeOfFlowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);


    let priceForFlower = 0;

    switch (typeOfFlowers) {
        case "Roses":
            priceForFlower = 5.00;
            break;
        case "Dahlias":
            priceForFlower = 3.80;
            break;
        case "Tulips":
            priceForFlower = 2.80;
            break;
        case "Narcissus":
            priceForFlower = 3.00;
            break;
        case "Gladiolus":
            priceForFlower = 2.50;
            break;
    }


    let totalPrice = flowersCount * priceForFlower;

    if (typeOfFlowers === "Roses" && flowersCount > 80) {
        totalPrice *= 0.90;
    } else if (typeOfFlowers === "Dahlias" && flowersCount > 90) {
        totalPrice *= 0.85;
    } else if (typeOfFlowers === "Tulips" && flowersCount > 80) {
        totalPrice *= 0.85;
    } else if (typeOfFlowers === "Narcissus" && flowersCount < 120) {
        totalPrice += totalPrice * 0.15;
    } else if (typeOfFlowers === "Gladiolus" && flowersCount < 80) {
        totalPrice += totalPrice * 0.20;
    }

    if (budget >= totalPrice) {
        budget -= totalPrice;
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeOfFlowers} and ${budget.toFixed(2)} leva left.`)
    } else {
        totalPrice -= budget;
        console.log(`Not enough money, you need ${totalPrice.toFixed(2)} leva more.`);
    }


}
flowersPrice(["Roses",
    "55",
    "250"]);
flowersPrice(["Tulips",
    "88",
    "260"]);
flowersPrice(["Narcissus",
    "119",
    "360"]);
