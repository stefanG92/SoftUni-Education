function easterEggs(input) {

    let index = 0;
    let eggsQuantity = Number(input[index]);
    index++;
    let command = input[index];
    let isEnaugEggs = true;
    let sellsEggs = 0;

    while (command !== "Close") {
        let commandForBuyEggs = command;
        index++
        let eggsCount = Number(input[index]);


        switch (commandForBuyEggs) {
            case "Buy":
                if (eggsCount > eggsQuantity) {

                    console.log("Not enough eggs in store!");
                    console.log(`You can buy only ${eggsQuantity}.`);

                    isEnaugEggs = false;
                    break;
                }
                sellsEggs += eggsCount;
                eggsQuantity -= eggsCount;
                break;
            case "Fill":

                eggsQuantity += eggsCount;
                break;
        }

        if (!isEnaugEggs) {
            break;
        }

        index++;
        command = input[index];
    }

    if (isEnaugEggs) {
        console.log("Store is closed!");
        console.log(`${sellsEggs} eggs sold.`);
    }


}
easterEggs(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"]);
easterEggs(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"]);
