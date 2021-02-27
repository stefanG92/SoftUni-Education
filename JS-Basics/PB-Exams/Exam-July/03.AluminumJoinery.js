function moneyForJoinery(input) {

    let joineryCount = Number(input[0]);
    let joinerySize = input[1];
    let typeDelivery = input[2];


    let priceForJoinery = 0;
    let isBigger = false;




    if (joineryCount > 10) {

        isBigger = true;

        switch (joinerySize) {
            case "90X130":
                priceForJoinery = joineryCount * 110;

                if (joineryCount >= 30 && joineryCount < 60) {
                    priceForJoinery *= 0.95;
                } else if (joineryCount >= 60) {
                    priceForJoinery *= 0.92;
                }

                break;
            case "100X150":
                priceForJoinery = joineryCount * 140;

                if (joineryCount >= 40 && joineryCount < 80) {
                    priceForJoinery *= 0.94;
                } else if (joineryCount >= 80) {
                    priceForJoinery *= 0.90;
                }

                break;
            case "130X180":
                priceForJoinery = joineryCount * 190;

                if (joineryCount >= 20 && joineryCount < 50) {
                    priceForJoinery *= 0.93;
                } else if (joineryCount >= 50) {
                    priceForJoinery *= 0.88;
                }

                break;
            case "200X300":
                priceForJoinery = joineryCount * 250;

                if (joineryCount >= 25 && joineryCount < 50) {
                    priceForJoinery *= 0.91;
                } else if (joineryCount >= 50) {
                    priceForJoinery *= 0.86;
                }

                break;
        }

    }

    let totalPrice = priceForJoinery;

    if (typeDelivery === "With delivery") {
        totalPrice += 60;
    }

    if (joineryCount > 99) {
        totalPrice *= 0.96;
    }

    if (isBigger) {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    } else {
        console.log("Invalid order");
    }


}

moneyForJoinery(["105",
    "100X150",
    "With delivery"]);
moneyForJoinery(["2",
    "130X180",
    "With delivery"]);