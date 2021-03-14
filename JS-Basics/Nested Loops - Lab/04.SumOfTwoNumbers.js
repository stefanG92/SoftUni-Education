function validCombination(input) {

    let index = 0;
    let firstNumber = Number(input[index]);
    index++;
    let secondNumber = Number(input[index]);
    index++;
    let magicNumber = Number(input[index]);

    let combinationCount = 0;
    let findValidCombination = false;

    for (let i = firstNumber; i <= secondNumber; i++) {
       
        for (let j = firstNumber; j <= secondNumber; j++) {
            combinationCount++;
            let result = i + j;


            if (result == magicNumber) {
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${result})`);
                findValidCombination = true;
                break
            }

            
        }


        if (findValidCombination) {
            break;
        }



    }
    if (!findValidCombination) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
}
validCombination(["1",
"10",
"5"]);
validCombination(["23",
"24",
"20"]);