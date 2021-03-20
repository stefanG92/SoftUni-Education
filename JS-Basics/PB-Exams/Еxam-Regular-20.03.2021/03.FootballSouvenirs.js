function souvenirsPrice(input) {

    let team = input[0];
    let typeOfSouvenirs = input[1];
    let souvenirsCount = Number(input[2]);


    let totalSouvenirsPrice = 0;
    let isValid = true;
    switch (team) {
        case "Argentina":

            switch (typeOfSouvenirs) {
                case "flags":
                    totalSouvenirsPrice = souvenirsCount * 3.25;
                    break;
                case "caps":
                    totalSouvenirsPrice = souvenirsCount * 7.20;
                    break;
                case "posters":
                    totalSouvenirsPrice = souvenirsCount * 5.10;
                    break;
                case "stickers":
                    totalSouvenirsPrice = souvenirsCount * 1.25;
                    break;
                default:
                    isValid = false;
                    console.log("Invalid stock!");
                    break;
            }

            break;

        case "Brazil":

            switch (typeOfSouvenirs) {
                case "flags":
                    totalSouvenirsPrice = souvenirsCount * 4.20;
                    break;
                case "caps":
                    totalSouvenirsPrice = souvenirsCount * 8.50;
                    break;
                case "posters":
                    totalSouvenirsPrice = souvenirsCount * 5.35;
                    break;
                case "stickers":
                    totalSouvenirsPrice = souvenirsCount * 1.20;
                    break;
                default:
                    isValid = false;
                    console.log("Invalid stock!");
                    break;
            }

            break;

        case "Croatia":

            switch (typeOfSouvenirs) {
                case "flags":
                    totalSouvenirsPrice = souvenirsCount * 2.75;
                    break;
                case "caps":
                    totalSouvenirsPrice = souvenirsCount * 6.90;
                    break;
                case "posters":
                    totalSouvenirsPrice = souvenirsCount * 4.95;
                    break;
                case "stickers":
                    totalSouvenirsPrice = souvenirsCount * 1.10;
                    break;
                default:
                    isValid = false;
                    console.log("Invalid stock!");
                    break;
            }

            break;

        case "Denmark":

            switch (typeOfSouvenirs) {
                case "flags":
                    totalSouvenirsPrice = souvenirsCount * 3.10;
                    break;
                case "caps":
                    totalSouvenirsPrice = souvenirsCount * 6.50;
                    break;
                case "posters":
                    totalSouvenirsPrice = souvenirsCount * 4.80;
                    break;
                case "stickers":
                    totalSouvenirsPrice = souvenirsCount * 0.90;
                    break;
                default:
                    isValid = false;
                    console.log("Invalid stock!");
                    break;
            }
            break;
        default:
            isValid = false;
            console.log("Invalid country!");
            break;

    }

    if(isValid){
        console.log(`Pepi bought ${souvenirsCount} ${typeOfSouvenirs} of ${team} for ${totalSouvenirsPrice.toFixed(2)} lv.`);
    }


}
souvenirsPrice(["Brazil", 
"stickers",
"5"]);
souvenirsPrice(["Denmark",
"caps",
"8"]);
souvenirsPrice(["USA",
"caps",
"18"]);
souvenirsPrice(["Croatia",
"flags",
"13"]);
souvenirsPrice(["Argentina",
"shirts",
"35"]);