function clubIncome(input) {

    let wantedProfit = Number(input[0]);

    let index = 1;
    let cocktailName = input[index];

    let totalPrice = 0;
    let isGetProfit = false;

    while (cocktailName !== "Party!") {
        let cocktailPrice = cocktailName.length;
        index++;
        let cocktailCount = Number(input[index]);
        index++;

        let evenOrOdd = (cocktailCount * cocktailPrice) % 10;
        totalPrice += cocktailPrice * cocktailCount;



        if (evenOrOdd % 3 == 0 && evenOrOdd !== 0) {
            totalPrice *= 0.75;
        }


        if (totalPrice >= wantedProfit) {
            console.log("Target acquired.");
            isGetProfit = true;
            break;
        }


        cocktailName = input[index];
    }

    if (!isGetProfit) {
        wantedProfit -= totalPrice;
        console.log(`We need ${wantedProfit.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);

}

clubIncome(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"]);