function sumNumbers(input) {

    let n = Number(input[0]);
    let average = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);
        average += currentNumber;

    }
    console.log((average / n).toFixed(2));

}
sumNumbers([4,
    3,
    2,
    4,
    2]);