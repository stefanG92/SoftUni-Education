function moneyForPrintBook(input) {

    let priceForOnePage = Number(input[0]);
    let priceForOneCover = Number(input[1]);
    let reductionForPrint = Number(input[2]);
    let moneyForDesigner = Number(input[3]);
    let reductionForTeam = Number(input[4]);


    // calculate costs 

    let moneyForAllBook = (899 * priceForOnePage) + (2 * priceForOneCover);
    reductionForPrint = reductionForPrint / 100;
    let costsForPrint = moneyForAllBook - (moneyForAllBook * reductionForPrint);
    let costsWithDesigner = costsForPrint + moneyForDesigner;
    
    reductionForTeam = reductionForTeam / 100;
    let total = costsWithDesigner - (costsWithDesigner * reductionForTeam);

    // print output
    break;
    console.log(`Avtonom should pay ${total.toFixed(2)} BGN.`);

}
moneyForPrintBook(["0.01",
    "1",
    "10",
    "20",
    "20"]);
moneyForPrintBook(["0.05",
    "1.20",
    "40",
    "19.99",
    "20"]);
moneyForPrintBook(["0.02",
    "0.50",
    "18",
    "21",
    "50"]);