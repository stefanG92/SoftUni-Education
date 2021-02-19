function costsForTrip(input) {

    let daysForVacation = Number(input[0]);
    let roomType = input[1];
    let gradeForHotel = input[2];

    // вид помещение	     по-малко от 10 дни	   между 10 и 15 дни	  повече от 15 дни
    // room for one person	не ползва намаление	   не ползва намаление	   не ползва намаление
    // apartment	        30% от крайната цена	35% от крайната цена	50% от крайната цена
    // president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена

    // ⦁	"room for one person" – 18.00 лв за нощувка
    // ⦁	"apartment" – 25.00 лв за нощувка 
    // ⦁	"president apartment" – 35.00 лв за нощувка

    let nights = daysForVacation - 1;

    let allNightsPrice = 0;

    if (roomType === "room for one person") {
        allNightsPrice = nights * 18;
    } else if (roomType === "apartment") {
        allNightsPrice = nights * 25;
    } else if (roomType === "president apartment") {
        allNightsPrice = nights * 35;
    }

    switch (roomType) {
        case "apartment":
            if (daysForVacation < 10) {
                allNightsPrice *= 0.70;
            } else if (daysForVacation >= 10 && daysForVacation <= 15) {
                allNightsPrice *= 0.65;
            } else if (daysForVacation > 15) {
                allNightsPrice = allNightsPrice / 2;
            }
            break;
        case "president apartment":
            if (daysForVacation < 10) {
                allNightsPrice *= 0.90;
            } else if (daysForVacation >= 10 && daysForVacation <= 15) {
                allNightsPrice *= 0.85;
            } else if (daysForVacation > 15) {
                allNightsPrice *= 0.80;
            }
            break;
    }

    if (gradeForHotel === "positive") {
        allNightsPrice += allNightsPrice * 0.25;
    } else if (gradeForHotel === "negative") {
        allNightsPrice *= 0.90;
    }

    

    console.log(allNightsPrice.toFixed(2));
}
costsForTrip(["2",
"apartment",
"positive"]);