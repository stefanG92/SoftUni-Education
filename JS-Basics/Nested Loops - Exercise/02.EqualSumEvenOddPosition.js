function calculateNumbers(input) {

    let firstNumber = input[0];
    let secondNumber = input[1];

    let printLine = "";

    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        let currentNumber = "" + i;
        let sumEven = 0;
        let sumOdd = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentElement = Number(currentNumber.charAt(j));

            if (j % 2 == 0) {
                sumEven += currentElement;
            } else {
                sumOdd += currentElement;
            }


        }

        if (sumEven === sumOdd) {
            printLine += `${i} `;
        }

    }
    console.log(printLine);
}
calculateNumbers(["100000",
    "100050"]);