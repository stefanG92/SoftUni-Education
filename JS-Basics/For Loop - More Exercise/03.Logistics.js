function cargo(input) {

    let cargoCount = Number(input[0]);

    // До 3 тона – микробус (200 лева на тон)
    // От 4 до 11 тона – камион (175 лева на тон)
    // 12 и повече тона – влак (120 лева на тон)
    let logisticPrice = 0;
    let totalCargoKg = 0;
    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;

    for (let i = 1; i <= cargoCount; i++) {

        let cargoKg = Number(input[i]);
        totalCargoKg += cargoKg;

        if (cargoKg <= 3) {

            logisticPrice += cargoKg * 200;
            busCargo += cargoKg;

        } else if (cargoKg >= 4 && cargoKg <= 11) {

            logisticPrice += cargoKg * 175;
            truckCargo += cargoKg;

        } else if (cargoKg > 12) {

            logisticPrice += cargoKg * 120;
            trainCargo += cargoKg;

        }

    }
    let averagePriceForTon = logisticPrice / totalCargoKg;

    busCargo = busCargo / totalCargoKg * 100;
    truckCargo = truckCargo / totalCargoKg * 100;
    trainCargo = trainCargo / totalCargoKg * 100;

    console.log(averagePriceForTon.toFixed(2));
    console.log(busCargo.toFixed(2) + "%");
    console.log(truckCargo.toFixed(2) + "%");
    console.log(trainCargo.toFixed(2) + "%");



}
cargo(["5",
    "2",
    "10",
    "20",
    "1",
    "7"]);
