function neededMoneyForGif(input) {

    let ageOFLily = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 10;
    let toyCount = 0;
    let getsFromBrother = 0;
    let lilyMoney = 0;



    for (let i = 1; i <= ageOFLily; i++) {

        if (i % 2 == 0) {
            lilyMoney += money;
            money += 10;

            getsFromBrother++;
        } else {
            toyCount++;
        }


    }


    lilyMoney += toyCount * toyPrice;
    lilyMoney -= getsFromBrother * 1.00;

    if (machinePrice <= lilyMoney) {
        lilyMoney -= machinePrice;
        console.log(`Yes! ${lilyMoney.toFixed(2)}`);
    } else {
        machinePrice -= lilyMoney;
        console.log(`No! ${machinePrice.toFixed(2)}`);
    }
}
neededMoneyForGif(["21", "1570.98", "3"]);