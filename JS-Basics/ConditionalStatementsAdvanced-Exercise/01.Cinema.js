function incomeFromTickets(input) {
    let projectType = input[0];
    let rowCount = Number(input[1]);
    let colonsCount = Number(input[2]);

    let allPlace = colonsCount * rowCount;

    // ⦁	Premiere – премиерна прожекция, на цена 12.00 лева.
    // ⦁	Normal – стандартна прожекция, на цена 7.50 лева.
    // ⦁	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
    let totalIncome = 0;

    if (projectType === "Premiere") {
        totalIncome = allPlace * 12.00;
    } else if (projectType === "Normal") {
        totalIncome = allPlace * 7.50;
    } else if (projectType === "Discount") {
        totalIncome = allPlace * 5.00;
    }

    console.log(totalIncome.toFixed(2) + " leva");
}
incomeFromTickets(["Normal",
"21",
"13"]);