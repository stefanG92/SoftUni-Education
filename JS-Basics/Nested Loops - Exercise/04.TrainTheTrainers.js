function avarageScoreForStudent(input) {

    let index = 0;
    let trainersCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let averageGrade = 0;
    let gradeCount = 0;

    while (command !== "Finish") {
        let precentation = command;
        

        let gradeForPrecentation = 0;

        for (let i = 0; i < trainersCount; i++) {
            let grade = Number(input[index]);
            index++;
            gradeForPrecentation += grade;
            gradeCount++;
        }
        averageGrade += gradeForPrecentation;
        console.log(`${precentation} - ${(gradeForPrecentation / trainersCount).toFixed(2)}.`);



        command = input[index];
        index++;
    }

    if(command === "Finish"){
        console.log(`Student's final assessment is ${(averageGrade / gradeCount).toFixed(2)}.`);
    }
}
avarageScoreForStudent(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);