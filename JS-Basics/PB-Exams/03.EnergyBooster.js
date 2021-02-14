function sumAboutOrder(input) {

    let fruit = input[0];
    let setsSize = input[1];
    let setsCount = Number(input[2]);


    // "Watermelon", "Mango", "Pineapple" или "Raspberry"

    let setsPrice = 0;


    switch (fruit) {
        case "Watermelon":
            if (setsSize === "small") {
                let packagePrice = 2 * 56;
                setsPrice = packagePrice;


            } else if (setsSize === "big") {
                packagePrice = 5 * 28.70;
                setsPrice = packagePrice;

            }

            break;
        case "Mango":
            if (setsSize === "small") {
                packagePrice = 2 * 36.66;
                setsPrice = packagePrice;

            } else if (setsSize === "big") {
                packagePrice = 5 * 19.60;
                setsPrice = packagePrice;

            }
            break;
        case "Pineapple":
            if (setsSize === "small") {
                packagePrice = 2 * 42.10;
                setsPrice = packagePrice;

            } else if (setsSize === "big") {
                packagePrice = 5 * 24.80;
                setsPrice = packagePrice;

            }
            break;
        case "Raspberry":
            if (setsSize === "small") {
                packagePrice = 2 * 20;
                setsPrice = packagePrice;

            } else if (setsSize === "big") {
                packagePrice = 5 * 15.20;
                setsPrice = packagePrice;

            }
            break;

    }

    let priceForAllSets = setsCount * setsPrice;

    //от 400 лв. до 1000 лв. включително има 15% отстъпка
    // над 1000 лв. има 50% отстъпка

    if (priceForAllSets >= 400 && priceForAllSets <= 1000) {
        priceForAllSets *= 0.85;
    } else if (priceForAllSets > 1000) {
        priceForAllSets = priceForAllSets / 2;
    }

    console.log(`${priceForAllSets.toFixed(2)} lv.`);


}
sumAboutOrder(["Raspberry",
"small",
"50"]);