function profitOfTickets (input){

    let nameCompany = input[0];
    let ticketsCountForAdult = Number (input[1]);
    let ticketsCountForKids = Number (input[2]);
    let netPrice = Number (input[3]);
    let priceForService = Number (input[4]);



    let grossPriceForAdult = netPrice + priceForService;
    let grossPriceForKids = (netPrice * 0.3) + priceForService;
    let totalPriceForService = (ticketsCountForAdult * grossPriceForAdult) + (ticketsCountForKids * grossPriceForKids);
    let clearProfit = totalPriceForService * 0.20;;

    console.log(`The profit of your agency from ${nameCompany} tickets is ${clearProfit.toFixed(2)} lv.`);
    
}
profitOfTickets(["WizzAir",
    "15",
    "5",
    "120",
    "40"]);