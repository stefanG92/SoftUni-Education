function packageLoad(input) {
    let index = 0
    let suitcaseQuantity = Number(input[index]);
    index++;
    let command = input[index];
    let packageCounter = 0;
    let enoughQuantity = true;

    while (command !== "End") {
        let packageSize = Number(command);
        index++;
        

        if (packageCounter % 3 == 0) {
            packageSize += packageSize * 0.10;
        }


        if (suitcaseQuantity < packageSize) {
            enoughQuantity = false;
            break
        }

        suitcaseQuantity -= packageSize;
        packageCounter++;


        command = input[index];
    }

    if(enoughQuantity){
        console.log("Congratulations! All suitcases are loaded!");
    }else {
        console.log("No more space!");
    }

    console.log(`Statistic: ${packageCounter} suitcases loaded.`);
}
packageLoad(["550",
    "100",
    "252",
    "72",
    "End"]);
    packageLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"]);
    packageLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"]);