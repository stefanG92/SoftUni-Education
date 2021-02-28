function histograms(input) {

    let number = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let i = 1; i <= number; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }

    }

    p1 = p1 / number * 100;
    p2 = p2 / number * 100;
    p3 = p3 / number * 100;
    p4 = p4 / number * 100;
    p5 = p5 / number * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
histograms(["3",
    "1",
    "2",
    "999"]);
