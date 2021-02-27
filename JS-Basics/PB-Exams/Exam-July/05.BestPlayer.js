function player(input) {

    let index = 0;
    let str = input[index]

    let theWinner = "";
    let goalOfTheWiner = 0;


    while (str !== "END") {
        let name = str;
        index++;
        let goal = Number(input[index]);
        index++;

        if (goal > goalOfTheWiner && goal < 10) {
            goalOfTheWiner = goal;
            theWinner = name;
        }else if(goal >= 10){
            goalOfTheWiner = goal;
            theWinner = name;
            break;
        }


        str = input[index];
    }

    console.log(`${theWinner} is the best player!`);
    
    if(goalOfTheWiner >= 3){
        console.log(`He has scored ${goalOfTheWiner} goals and made a hat-trick !!!`);
    }else {
        console.log(`He has scored ${goalOfTheWiner} goals.`);
    }


}
player(["Silva",
"5",
"Harry Kane",
"10"]);