function moneyForShop(input) {

    let budget = Number(input[0]);

    let index = 1;
    let str = input[index];

    let productCounter = 0;
    let allProductsPrice = 0;
    let isEnoughtMoney = true;


    while (str !== "Stop") {
        let nameProduct = input[index];
        index++;
        let productPrice = Number(input[index]);
        index++;

        productCounter++;

        if (productCounter == 3) {
            productPrice = productPrice / 2;
        }

        allProductsPrice += productPrice;

        if (budget > productPrice) {
            budget -= productPrice;
        } else if (budget < productPrice) {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            isEnoughtMoney = false;
            break;
        }


        str = input[index];
    }

    if (isEnoughtMoney) {
        console.log(`You bought ${productCounter} products for ${allProductsPrice.toFixed(2)} leva.`);
    }
}
moneyForShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"]);