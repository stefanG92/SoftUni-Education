function cardGame(input) {

    let index = 0;
    let playerOneName = input[index];
    index++;
    let playerTwoName = input[index];
    index++;
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let isNumbersWars = false;


    let command = input[index];

    while (command !== "End of game") {
        let cardOfPlayerOne = Number(command);
        index++;
        let cardOfPlayerTwo = Number(input[index]);
        index++;

        if (cardOfPlayerOne > cardOfPlayerTwo) {

            playerOnePoints += cardOfPlayerOne - cardOfPlayerTwo;

        } else if (cardOfPlayerTwo > cardOfPlayerOne) {

            playerTwoPoints += cardOfPlayerTwo - cardOfPlayerOne;

        } else if (cardOfPlayerOne == cardOfPlayerTwo) {
            isNumbersWars = true;

            cardOfPlayerOne = Number(input[index]);
            index++;
            cardOfPlayerTwo = Number(input[index]);


            if (cardOfPlayerOne > cardOfPlayerTwo) {

                let winner = playerOneName;
                console.log("Number wars!");
                console.log(`${winner} is winner with ${playerOnePoints} points`);

            } else {

                let winner = playerTwoName;
                console.log("Number wars!");
                console.log(`${winner} is winner with ${playerTwoName} points`);

            }
            break;
        }


        command = input[index];
    }

    if (!isNumbersWars) {

        console.log(`${playerOneName} has ${playerOnePoints} points`);
        console.log(`${playerTwoName} has ${playerTwoPoints} points`);

    }


}
cardGame(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);
cardGame(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"]);