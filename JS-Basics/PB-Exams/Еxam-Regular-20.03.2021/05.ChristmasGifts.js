function giftsPrice(input) {

    let index = 0;
    let command = input[index];
    let adultsCount = 0;
    let kidsCount = 0;
    let sweatersPrice = 0;
    let toysPrice = 0;

    while (command !== "Christmas") {

        let personAge = Number(command);

        if (personAge <= 16) {
            kidsCount++;
        } else if (personAge > 16) {
            adultsCount++;
        }

        index++;
        command = input[index];
    }

    sweatersPrice = adultsCount * 15;
    toysPrice = kidsCount * 5;

  
 console.log(`Number of adults: ${adultsCount}`);
 console.log(`Number of kids: ${kidsCount}`);
 console.log(`Money for toys: ${toysPrice}`);
 console.log(`Money for sweaters: ${sweatersPrice}`);

}
giftsPrice(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"]);
