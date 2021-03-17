function easterPurchases(input) {

    let index = 0;
    let peopleCount = Number(input[index]);
    index++;
    let totalPriceForClient = 0;


    for (let i = 0; i < peopleCount; i++) {
        let command = input[index];

        let productCount = 0;
        let productPrice = 0;

        while (command !== "Finish") {
            let product = command;

            productCount++;

            // ("basket", "wreath" или "chocolate bunny")

            switch (product) {
                case "basket":
                    productPrice += 1.50;
                    break;
                case "wreath":
                    productPrice += 3.80;
                    break;
                case "chocolate bunny":
                    productPrice += 7.00;
                    break;
            }


            index++;
            command = input[index];
        }

        if (productCount % 2 == 0) {
            productPrice *= 0.80;
        }
        totalPriceForClient += productPrice;

        console.log(`You purchased ${productCount} items for ${productPrice.toFixed(2)} leva.`);

        index++;

    }

    console.log(`Average bill per client is: ${(totalPriceForClient / peopleCount).toFixed(2)} leva.`);


}
easterPurchases(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"]);
    easterPurchases(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"]);