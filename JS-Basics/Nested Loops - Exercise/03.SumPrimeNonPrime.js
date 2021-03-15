function sumNumbers(input) {

    let index = 0;
    let command = input[index];
    index++;
    let simpleNumberSum = 0;
    let nonSimpleNumberSum = 0;


    while (command !== "stop") {
        let number = Number(command);


        if (number < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if (number === 1) {
            simpleNumberSum += number;
            command = input[index];
            index++;
            continue;
        }
        let isSimple = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) {
                isSimple = false;
                break;
            }

        }
        if (isSimple) {
            simpleNumberSum += number;
        } else {
            nonSimpleNumberSum += number;
        }

        command = input[index];
        index++;


    }
    console.log(`Sum of all prime numbers is: ${simpleNumberSum}`);
    console.log(`Sum of all non prime numbers is: ${nonSimpleNumberSum}`);
}
sumNumbers(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);