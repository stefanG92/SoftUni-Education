function neededPreparation(input) {

    let index = 0;
    let botlesCount = Number(input[index]);
    index++;
    let command = input[index];


    let quantityPreparation = botlesCount * 750;
    let counter = 0;

    let plates = 0;
    let pots = 0;
    let preparation = 0;
    let enoughPreparation = true;
    // за 1 чиния са нужни 5 мл., а за тенджера 15 мл
    while (command !== "End") {

        if (quantityPreparation <= 0) {
            quantityPreparation = 0;
            enoughPreparation = false;
            break;
        }

        let vesselsCount = Number(command);
        counter++;


        if (counter % 3 == 0) {
            // TODO
            pots += vesselsCount;
            vesselsCount *= 15;
            if (vesselsCount <= quantityPreparation) {
                
                quantityPreparation -= vesselsCount;

            } else {
                preparation = vesselsCount - quantityPreparation;
                enoughPreparation = false;
                break;
            }

        } else {
            plates += vesselsCount;
            vesselsCount *= 5;

            if (vesselsCount <= quantityPreparation) {
                quantityPreparation -= vesselsCount;
            } else {
                preparation = vesselsCount - quantityPreparation;
                enoughPreparation = false;
                break;
            }


        }



        index++;
        command = input[index];

    }

    if (enoughPreparation) {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${quantityPreparation} ml.`);
    } else {
        console.log(`Not enough detergent, ${preparation} ml. more necessary!`);
    }


}
neededPreparation(["2",
"53",
"65",
"55",
"End"]);
neededPreparation(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"]);