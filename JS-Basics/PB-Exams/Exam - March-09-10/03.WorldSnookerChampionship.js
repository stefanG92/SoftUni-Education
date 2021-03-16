function snookerTicketsOffer(input) {

    let championshipType = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let picturesWithCup = input[3];

   
    let priceForOneTicket = 0;
    switch (championshipType) {
        case "Quarter final":

            switch (ticketType) {
                case "Standard":
                    priceForOneTicket = 55.50;
                    break;
                case "Premium":
                    priceForOneTicket = 105.20;
                    break;
                case "VIP":
                    priceForOneTicket = 118.90;
                    break;
            }

            break;
        case "Semi final":

            switch (ticketType) {
                case "Standard":
                    priceForOneTicket = 75.88;
                    break;
                case "Premium":
                    priceForOneTicket = 125.22;
                    break;
                case "VIP":
                    priceForOneTicket = 300.40;
                    break;
            }

            break;
        case "Final":

            switch (ticketType) {

                case "Standard":
                    priceForOneTicket = 110.10;
                    break;
                case "Premium":
                    priceForOneTicket = 160.66;
                    break;
                case "VIP":
                    priceForOneTicket = 400.00;
                    break;
            }

            break;
    }

    let allTicketsPrice = ticketsCount * priceForOneTicket;
    let isFreePictures = false;

    if (allTicketsPrice > 4000) {
        allTicketsPrice *= 0.75;
        isFreePictures = true;
    } else if (allTicketsPrice >= 2500 && allTicketsPrice <= 4000) {
        allTicketsPrice *= 0.90;
    }

    if (picturesWithCup === "Y") {
        if (!isFreePictures) {
            allTicketsPrice += ticketsCount * 40.00;
        }
    }

    console.log(allTicketsPrice.toFixed(2));





}
snookerTicketsOffer(["Final",
"Premium",
"25",
"Y"]);
snookerTicketsOffer(["Semi final",
"VIP",
"9",
"Y"]);
snookerTicketsOffer(["Quarter final",
"Standard",
"11",
"N"]);