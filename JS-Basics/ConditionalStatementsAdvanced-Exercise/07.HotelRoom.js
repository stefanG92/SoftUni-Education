function priceForRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    // May, June, July, August, September или October

    let priceForApratment = 0;
    let priceForStudio = 0;

    switch (month) {
        case "May":
        case "October":
            priceForStudio = 50;
            priceForApratment = 65;

            if (nightsCount < 7) {
                priceForStudio *= 0.95;
            } else if (nightsCount > 14) {
                priceForStudio *= 0.70;
                priceForApratment *= 0.90;
            }

            break;

        case "June":
        case "September":
            priceForStudio = 75.20;
            priceForApratment = 68.70;

            if (nightsCount > 14) {
                priceForStudio *= 0.80;
                priceForApratment *= 0.90;
            }


            break;

        case "July":
        case "August":
            priceForStudio = 76.00;
            priceForApratment = 77.00;

            if (nightsCount > 14) {
                priceForApratment *= 0.90;
            }
            break;
    }
    let totalForApartment = nightsCount * priceForApratment;
    let totalForStudio = nightsCount * priceForStudio;

   
console.log(`Apartment: ${totalForApartment.toFixed(2)} lv.`);
console.log(`Studio: ${totalForStudio.toFixed(2)} lv.`)


}

priceForRoom(["June",
"14"]);
