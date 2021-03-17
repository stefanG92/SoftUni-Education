function paintingEggs(input) {

    let eggsSize = input[0];
    let eggsColor = input[1];
    let batchesCount = Number(input[2]);

    let batchesPrice = 0;

    switch (eggsSize) {
        case "Large":

            switch (eggsColor) {
                case "Red":
                    batchesPrice = 16;
                    break;
                case "Green":
                    batchesPrice = 12;
                    break;
                case "Yellow":
                    batchesPrice = 9;
                    break;
            }

            break;
        case "Medium":
            
            switch (eggsColor) {
                case "Red":
                    batchesPrice = 13;
                    break;
                case "Green":
                    batchesPrice = 9;
                    break;
                case "Yellow":
                    batchesPrice = 7;
                    break;
            }

            break;
        case "Small":

            switch (eggsColor) {
                case "Red":
                    batchesPrice = 9;
                    break;
                case "Green":
                    batchesPrice = 8;
                    break;
                case "Yellow":
                    batchesPrice = 5;
                    break;
            }
            
        break;
    }

    let clearIncomes = (batchesPrice * batchesCount) * 0.65;

    console.log(`${clearIncomes.toFixed(2)} leva.`);

}
paintingEggs(["Large",
"Red",
"7"]);
paintingEggs(["Medium",
"Green",
"5"]);
paintingEggs(["Small",
"Yellow",
"3"]);