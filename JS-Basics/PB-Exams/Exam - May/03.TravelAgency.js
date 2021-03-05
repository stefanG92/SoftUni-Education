function priceForTravel(input) {
    
    let townName = input[0];
    let pacageName = input[1];
    let vipGift = input[2];
    let daysCount = Number(input[3]);
    let isValid = true;

    
    let priceForDay = 0;

    switch (townName) {
        case "Bansko":
        case "Borovets":
            switch (pacageName) {
                case "noEquipment":

                    if (vipGift === "yes") {
                        priceForDay = 80 * 0.95;
                    } else if (vipGift === "no") {
                        priceForDay = 80;
                    }

                    break;
                case "withEquipment":

                    if (vipGift === "yes") {
                        priceForDay = 100 * 0.90;
                    } else if (vipGift === "no") {
                        priceForDay = 100;
                    }

                    break;

                default:
                    console.log("Invalid input!");
                    isValid = false;
                    break;
            }
            break;



        case "Varna":
        case "Burgas":
            switch (pacageName) {
                case "noBreakfast":

                    if (vipGift === "yes") {
                        priceForDay = 100 * 0.93;
                    } else if (vipGift === "no") {
                        priceForDay = 100;
                    }

                    break;
                case "withBreakfast":

                    if (vipGift === "yes") {
                        priceForDay = 130 * 0.88;
                    } else if (vipGift === "no") {
                        priceForDay = 130;
                    }

                    break;

                default:
                    console.log("Invalid input!");
                    isValid = false;
                    break;
            }


            break;
        default:
            console.log("Invalid input!");
            isValid = false;
            break;

    }

    if (daysCount > 7) {
        daysCount -= 1;
    }

    if (daysCount < 1) {
        console.log("Days must be positive number!");
    } else {
        let priceForAllTravel = daysCount * priceForDay;

        if (isValid) {
            console.log(`The price is ${priceForAllTravel.toFixed(2)}lv! Have a nice time!`);
        }
    }


}
priceForTravel(["Gabrovo",
    "noBreakfast",
    "no",
    "3"]);