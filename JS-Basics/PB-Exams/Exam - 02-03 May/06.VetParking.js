function parkingPrice(input) {

    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);
    let priceForDay = 0;
    let priceForAllDays = 0;


    for (let i = 1; i <= daysCount; i++) {


        for (let j = 1; j <= hoursCount; j++) {

            if (i % 2 == 0 && j % 2 != 0) {
                priceForDay += 2.50;
            } else if (i % 2 != 0 && j % 2 == 0) {
                priceForDay += 1.25;
            } else {
                priceForDay += 1.00;
            }

        }

        console.log(`Day: ${i} - ${priceForDay.toFixed(2)} leva`);
        priceForAllDays += priceForDay;
        priceForDay = 0;

    }

    console.log(`Total: ${priceForAllDays.toFixed(2)} leva`);
}
parkingPrice(["5",
"2"]);