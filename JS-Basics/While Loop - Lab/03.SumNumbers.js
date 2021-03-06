function sum (input){
    let number = Number (input[0]);
    let index = 1;
    
    let sum = 0;

    while(sum < number){
        let numberFromInput = Number (input[index]);
        sum += numberFromInput;
        index++;
    }
    console.log(sum);

}
sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);