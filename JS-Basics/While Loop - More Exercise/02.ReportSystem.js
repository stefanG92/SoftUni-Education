function charityEvent(input) {
    let index = 0;
    let expectedMoney = Number(input[index]);
    index++;
    let line = input[index];

    let payWithCard = 0;
    let cardPayses = 0
    let payWithCash = 0;
    let cashPayses = 0;
    let saveMoney = 0;
    let counter = 0;
    let isCompleteTarget = false;


    while (line !== "End") {
        let productPrice = Number(line);
        index++;

        counter++;

        if (counter % 2 == 0) {

            if (productPrice >= 10) {

                payWithCard += productPrice;
                cardPayses++;
                saveMoney += productPrice;
                console.log("Product sold!");

            } else {
                console.log("Error in transaction!");
            }

        } else {


            if (productPrice <= 100) {

                payWithCash += productPrice;
                cashPayses++;
                saveMoney += productPrice;
                console.log("Product sold!");

            } else {
                console.log("Error in transaction!");
            }



        }

        if (saveMoney >= expectedMoney) {

            payWithCash = payWithCash / cashPayses;
            payWithCard = payWithCard / cardPayses;
            console.log(`Average CS: ${payWithCash.toFixed(2)}`);
            console.log(`Average CC: ${payWithCard.toFixed(2)}`);
            isCompleteTarget = true;
            break;
        }





        line = input[index];
    }

    if (!isCompleteTarget) {
        console.log("Failed to collect required money for charity.");
    }



}
charityEvent(["600",
    "86",
    "150",
    "98",
    "227",
    "End"]);