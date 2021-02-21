function travelCosts(input) {

    let budget = Number(input[0]);
    let seson = input[1];

  
    let destination = "";
    let kindOfVacation = "";
    let costs = 0;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (seson === "summer") {

            kindOfVacation = "Camp";
            costs = budget * 0.30;

        } else if (seson === "winter") {

            kindOfVacation = "Hotel";
            costs = budget * 0.70;

        }

    } else if (budget <= 1000) {
        destination = "Balkans";

        if (seson === "summer") {

            kindOfVacation = "Camp";
            costs = budget * 0.40;

        } else if (seson === "winter") {

            kindOfVacation = "Hotel";
            costs = budget * 0.80;

        }

    } else if (budget > 1000) {
        destination = "Europe";

        kindOfVacation = "Hotel";
        costs = budget * 0.90;
    }

    

    console.log(`Somewhere in ${destination}`);
    console.log(`${kindOfVacation} - ${costs.toFixed(2)}`);

}
travelCosts(["50", "summer"]);
travelCosts(["75", "winter"]);
travelCosts(["312", "summer"]);
travelCosts(["678.53", "winter"]);
travelCosts(["1500", "summer"]);