function saveMoney(input) {

    let neededMoney = Number(input[0]);
    let availibleMoney = Number(input[1]);
    let index = 2;
    let spendCount = 0;
    let days = 0;
    let isSaveMoney = true;

    while (availibleMoney < neededMoney) {
        days++;

        let opportunity = input[index];
        index++;

        let currentMoney = Number(input[index]);
        index++;


        if (opportunity === "spend") {
            availibleMoney -= currentMoney;
            if (availibleMoney < 0) {
                availibleMoney = 0;
            }
            spendCount++;
        } else if (opportunity === "save") {
            availibleMoney += currentMoney;
            spendCount = 0;
        }


        if (spendCount === 5) {
            console.log("You can't save the money.");
            console.log(`${days}`);
            isSaveMoney = false;
            break;
        }


    }

    if (isSaveMoney) {
        console.log(`You saved the money for ${days} days.`);
    }


}
saveMoney(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
;