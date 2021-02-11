function profitCalulated (input){


    let VacationPrice = Number (input[0]);
    let puzzleCount = Number (input[1]);
    let dollsCount = Number (input[2]);
    let bearsCount = Number (input[3]);
    let minionsCount = Number (input[4]);
    let trucksCount = Number (input[5]);

    let toysCaunt = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    // price of toys 

    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;


    // caclulate bonus form price 

    if(toysCaunt >= 50){
        totalPrice *= 0.75;
    }

    let profit = totalPrice * 0.90;

    if(VacationPrice <= profit){

        let moneyLeft =  profit - VacationPrice;
        console.log("Yes! " + moneyLeft.toFixed(2) + " lv left.");

    }else{

        let moneyNeed = VacationPrice - profit;
        console.log("Not enough money! " + moneyNeed.toFixed(2) + " lv needed.")

    }

    


}
profitCalulated(["40.8", "20", "25", "30", "50", "10"]);