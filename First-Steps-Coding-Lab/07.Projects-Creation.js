function neededHours (input){

    let nameArchitect = input[0];
    let projectCount = Number (input[1]);

    let hoursForAllProject = projectCount * 3;

    console.log(`The architect ${nameArchitect} will need ${hoursForAllProject} hours to complete ${projectCount} project/s.`);

}
neededHours(["Sanya",
"9"])
;