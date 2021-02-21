function operationWithNumbers(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sign = input[2];


    let evenOrOddNumber = "";
    let result = 0;

    switch (sign) {
        case "+":
            result = firstNumber + secondNumber;

            if (result % 2 == 0) {
                evenOrOddNumber = "even";
            } else {
                evenOrOddNumber = "odd";
            }

            console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${evenOrOddNumber}`);
            break;
        case "-":
            result = firstNumber - secondNumber;

            if (result % 2 == 0) {
                evenOrOddNumber = "even";
            } else {
                evenOrOddNumber = "odd";
            }
            console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${evenOrOddNumber}`);

            break;
        case "*":
            result = firstNumber * secondNumber;

            if (result % 2 == 0) {
                evenOrOddNumber = "even";
            } else {
                evenOrOddNumber = "odd";
            }
            console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${evenOrOddNumber}`);

            break;
        case "/":
            if (firstNumber != 0 && secondNumber != 0) {
                result = firstNumber / secondNumber;
            } else {
                console.log(`Cannot divide ${firstNumber} by zero`);
                break;
            }
            console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
            break;
        case "%":
            if (firstNumber != 0 && secondNumber != 0) {
                result = firstNumber % secondNumber;
            } else {
                console.log(`Cannot divide ${firstNumber} by zero`);
                break;
            }
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);
            break;
    }


}
operationWithNumbers(["10",
    "12",
    "+"]);
operationWithNumbers(["10",
    "1",
    "-"]);
operationWithNumbers(["7",
    "3",
    "*"]);
operationWithNumbers(["123",
    "12",
    "/"]);
operationWithNumbers(["10",
    "3",
    "%"]);
operationWithNumbers(["112",
    "0",
    "/"]);
operationWithNumbers(["10",
    "0",
    "%"]);