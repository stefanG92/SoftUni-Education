function neededMoneyForTravel(input) {
    let currentDestination = "";
    let neededMoney = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            break;
        }

        currentDestination = input[i++];
        neededMoney = input[i];
        let saveMoney = 0;

        while (saveMoney < neededMoney){
            i++;

            saveMoney += Number (input[i]);
        }
        console.log(`Going to ${currentDestination}!`);

    }
}
neededMoneyForTravel(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
