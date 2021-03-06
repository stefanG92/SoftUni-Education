function findMaxNumber (input){
    let index = 0;
    let command = input[index];

    let maxNumber = Number.MIN_VALUE;

    while(command !== "Stop"){
        let number = Number (command);

        if(number > maxNumber ){
            maxNumber = number;
        }

        index++;
        command = input[index];
    }

    console.log(maxNumber);
}

findMaxNumber(["-1","-2","Stop"]);