function lineOfNumbers (input){
    let n = Number (input[0]);

    let currentNumber = 1;

    while(n >= currentNumber){
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }
}
lineOfNumbers(["3"]);