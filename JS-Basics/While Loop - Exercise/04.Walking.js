function walking (input){

    let target = 10000;
    let steps = 0;
    let index = 0;

    while (steps < target){
        
        let currentSteps = input[index];
        index++;


        if(currentSteps === "Going home"){
            currentSteps = Number (input[index]);
            steps += currentSteps;
            break;
        }else {
            currentSteps = Number (currentSteps);
            steps += currentSteps;
        }


    }

    if(steps >= target){
        console.log("Goal reached! Good job!");
        console.log(`${steps - target} steps over the goal!`)
    }else {
        console.log(`${target - steps} more steps to reach goal.`);
    }

}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);
