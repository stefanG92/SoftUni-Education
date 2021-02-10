function calculator (input){

  
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let yearProcent = Number(input[2]);
 
 //    сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
 
    let interestForTheMoment = deposit * yearProcent / 100;
    let interestForMount = interestForTheMoment / 12;
 
    let totalSum = deposit + term * interestForMount;
 
     
    console.log(totalSum)
 }
calculator(["2350",
"6",
"7"]);