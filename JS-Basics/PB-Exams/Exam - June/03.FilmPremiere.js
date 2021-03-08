function filmPrice(input) {

    let projection = input[0];
    let filmPackage = input[1];
    let ticketsCount = Number(input[2]);

    let pricePackage = 0;
    let totalPrice = 0;

 
    switch (projection) {
        case "John Wick":

            if (filmPackage === "Drink") {
                pricePackage = 12.00;
            } else if (filmPackage === "Popcorn") {
                pricePackage = 15.00;
            } else if (filmPackage === "Menu") {
                pricePackage = 19.00;
            }

            totalPrice = ticketsCount * pricePackage;

            break;
        case "Star Wars":

            if (filmPackage === "Drink") {
                pricePackage = 18.00;
            } else if (filmPackage === "Popcorn") {
                pricePackage = 25.00;
            } else if (filmPackage === "Menu") {
                pricePackage = 30.00;
            }

            totalPrice = ticketsCount * pricePackage;

            if (ticketsCount >= 4) {
                totalPrice *= 0.70;
            }

            break;
        case "Jumanji":

            if (filmPackage === "Drink") {
                pricePackage = 9.00;
            } else if (filmPackage === "Popcorn") {
                pricePackage = 11.00;
            } else if (filmPackage === "Menu") {
                pricePackage = 14.00;
            }

            totalPrice = ticketsCount * pricePackage;

            if(ticketsCount == 2){
                totalPrice *= 0.85;
            }

            break;
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);



}
filmPrice(["John Wick",
"Drink",
"6"]);
filmPrice(["Star Wars",
"Popcorn",
"4"]);
filmPrice(["Jumanji",
"Menu",
"2"]);