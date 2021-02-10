function charity(input) {
    //read input
    daysCount = Number(input[0]);
    cooks = Number(input[1]);
    cakes = Number(input[2]);
    waffles = Number(input[3]);
    pancakes = Number(input[4]);
    // for one day 
    let totalCakes = cakes * 45;
    let totalWaffles = waffles * 5.80;
    let totalPancakes = pancakes * 3.20;

    let moneyForDay = (totalCakes + totalWaffles + totalPancakes) * cooks;

    // for all campaign

    let moneyOfCampaign = moneyForDay * daysCount;

    let clear = moneyOfCampaign - moneyOfCampaign / 8;



    console.log(clear);


}

charity(["23",
    "8",
    "14",
    "30",
    "16"]);