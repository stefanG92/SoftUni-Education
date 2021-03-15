function pyramid(input) {

    let n = Number(input[0]);
    let current = 1;
    let isBrake = false;
    let currentLine = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            if (current > n) {
                isBrake = true;
                break
            }
            currentLine += current + " ";
            current++;

        }
        console.log(currentLine);
        currentLine = "";
        if (isBrake) {
            break;
        }

    }
}
pyramid(["7"]);