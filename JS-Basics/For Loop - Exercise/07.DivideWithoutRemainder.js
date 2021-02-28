function divide(input) {

    let number = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= number; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber % 2 == 0) {
            p1Counter++;
        } else if (currentNumber % 3 == 0) {
            p2Counter++;
        } else if (currentNumber % 4 == 0) {
            p3Counter++;
        }

    }

    p1Counter = p1Counter / number * 100;
    p2Counter = p2Counter / number * 100;
    p3Counter = p3Counter / number * 100;

    console.log(p1Counter.toFixed(2) + "%");
    console.log(p2Counter.toFixed(2) + "%");
    console.log(p3Counter.toFixed(2) + "%");

}
divide(["3",
"3",
"6",
"9"]);