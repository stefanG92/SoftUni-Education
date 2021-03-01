function numberValue(input) {


    
let minNumber = Number.MAX_VALUE;

for (let i = 0; i < input.length; i++) {
    let currentNumber = Number (input[i]);

    if(currentNumber < minNumber){
        minNumber = currentNumber;
    }
    
}

console.log(minNumber);


}
numberValue(["3",
    "-10",
    "20",
    "-30"]);