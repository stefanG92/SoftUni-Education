function coins(input) {

    let money = Number(input[0]);
    let moneyInCouns = Math.floor(money * 100);
    let counter = 0
    while (moneyInCouns > 0) {

        if (moneyInCouns >= 200) {
            moneyInCouns -= 200;
            counter++;
        } else if (moneyInCouns >= 100) {
            moneyInCouns -= 100;
            counter++;
        } else if (moneyInCouns >= 50) {
            moneyInCouns -= 50;
            counter++;
        } else if (moneyInCouns >= 20) {
            moneyInCouns -= 20;
            counter++;
        } else if (moneyInCouns >= 10) {
            moneyInCouns -= 10;
            counter++;
        } else if (moneyInCouns >= 5) {
            moneyInCouns -= 5;
            counter++;
        } else if (moneyInCouns >= 0.02) {
            moneyInCouns -= 2;
            counter++;
        } else if (moneyInCouns >= 1) {
            moneyInCouns -= 1;
            counter++;
        }


    }
    console.log(counter);
}
coins(["1.23"]);