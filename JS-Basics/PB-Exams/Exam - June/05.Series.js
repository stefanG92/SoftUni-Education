function calculatePriceOfMovie(input) {

    let budget = Number(input[0]);
    let serialsCount = Number(input[1]);
    let index = 2;
    let totalPrice = 0;



    for (let i = 0; i < serialsCount; i++) {
        let serialName = input[index];
        index++;
        let serialPrice = Number(input[index]);
        index++;

        switch (serialName) {
            case "Thrones":
                totalPrice += serialPrice * 0.50;
                break;
            case "Lucifer":
                totalPrice += serialPrice * 0.60;
                break;
            case "Protector":
                totalPrice += serialPrice * 0.70;
                break;
            case "TotalDrama":
                totalPrice += serialPrice * 0.80;
                break;
            case "Area":
                totalPrice += serialPrice * 0.90;
                break;
            default:
                totalPrice += serialPrice;
                break;
        }
    }

    if (totalPrice <= budget) {
        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);
    }

}
calculatePriceOfMovie(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"]);
    calculatePriceOfMovie(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"]);