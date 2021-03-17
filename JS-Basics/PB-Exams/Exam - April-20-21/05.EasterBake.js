function easterBreads(input) {

    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;
    let allSugar = 0;
    let allFlour = 0;


    for (let i = 1; i <= easterBreadCount; i++) {
        let sugarQuantity = Number(input[index]);
        index++;
        let flourQuantity = Number(input[index]);
        index++;
        allSugar += sugarQuantity;
        allFlour += flourQuantity;

        if (sugarQuantity > maxSugar) {
            maxSugar = sugarQuantity;
        } 
         if (flourQuantity > maxFlour) {
            maxFlour = flourQuantity;
        }

    }
    

    console.log(`Sugar: ${Math.ceil(allSugar / 950)}`);
    console.log(`Flour: ${Math.ceil(allFlour / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBreads(["3",
"400",
"350",
"250",
"300",
"450",
"380"]);