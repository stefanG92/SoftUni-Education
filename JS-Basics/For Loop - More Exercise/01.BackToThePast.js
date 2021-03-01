function neededMoney (input){

    let money = Number (input[0]);
    let year = Number (input[1]);
    let ivanYear = 18;
    let spentMoney = 0;

    for (let i = 1800; i <= year; i++) {

        
        
        if(i % 2 ==0){
            spentMoney += 12000;
        }else{
            spentMoney += 12000 + (50 * ivanYear);
        }

        ivanYear++;
    }

    if(money >= spentMoney){
        money -= spentMoney;
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }else {
        spentMoney -= money;
        console.log(`He will need ${spentMoney.toFixed(2)} dollars to survive.`);
    }


}
neededMoney(["50000",
"1802"]);