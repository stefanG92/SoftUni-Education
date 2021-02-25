function sum(input) {

    let numbersAsString = input[0];
    let numbersSum = 0;

    for (let i = 0; i < numbersAsString.length; i++) {
        let number = Number(numbersAsString[i]);

        numbersSum += number;

    }
    console.log(`The sum of the digits is:${numbersSum}`);
}
sum(["1234"]);