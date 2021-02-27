function ticketIncome(input) {

    let nameCompany = input[0];
    let ticketsForAdults = Number(input[1]);
    let ticketsForKids = Number(input[2]);
    let ticketPriceForAdult = Number(input[3]);
    let servicePrice = Number(input[4]);


    let kidsTicketPrice = ticketPriceForAdult * 0.30;
    let adultsTicketsTotal = ticketPriceForAdult + servicePrice;
    let kidsTicketTotal = kidsTicketPrice + servicePrice;

    let priceForAllTickets = (ticketsForAdults * adultsTicketsTotal) + (ticketsForKids * kidsTicketTotal);
    let companyIncome = priceForAllTickets * 0.20;

    console.log(`The profit of your agency from ${nameCompany} tickets is ${companyIncome.toFixed(2)} lv.`);

}
ticketIncome(["WizzAir",
    "15",
    "5",
    "120",
    "40"]);