function profit(input) {


    let movieName = input[0];
    let daysCount = Number(input[1])
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let moneyForCinema = Number(input[4]);


    moneyForCinema = moneyForCinema / 100 * 10;
    let priceForAllTickets = (ticketsCount * ticketPrice) * daysCount;
    let allIncome = priceForAllTickets * moneyForCinema / 10;
    let incomeForAllDays = priceForAllTickets - allIncome;



    console.log(`The profit from the movie ${movieName} is ${incomeForAllDays.toFixed(2)} lv.`);


}
profit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"]);
profit(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"]);