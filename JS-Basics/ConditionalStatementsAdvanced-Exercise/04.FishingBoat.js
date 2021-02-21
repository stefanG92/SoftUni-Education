function priceForBoat(input) {

    let budget = Number(input[0]);
    let seson = input[1];
    let fisherCount = Number(input[2]);



    let rentForBoat = 0;

    switch (seson) {
        case "Spring":
            rentForBoat = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentForBoat = 4200;
            break;
        case "Winter":
            rentForBoat = 2600;
            break;

    }
    
    if (fisherCount <= 6) {
        rentForBoat *= 0.90;
    } else if (fisherCount >= 7 && fisherCount <= 11) {
        rentForBoat *= 0.85;
    } else if (fisherCount > 12) {
        rentForBoat *= 0.75;
    }

    if (seson !== "Autumn" && fisherCount % 2 == 0) {
        rentForBoat *= 0.95;
    }

    if (budget >= rentForBoat) {
        budget -= rentForBoat;
        console.log(`Yes! You have ${budget.toFixed(2)} leva left.`);
    } else {
        rentForBoat -= budget;
        console.log(`Not enough money! You need ${rentForBoat.toFixed(2)} leva.`);

    }

}

priceForBoat(["3000",
    "Summer",
    "11"]);
priceForBoat(["3600",
    "Autumn",
    "6"]);
priceForBoat(["2000",
    "Winter",
    "13"]);
