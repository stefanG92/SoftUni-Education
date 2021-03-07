function studentsTaskGrades (input) {
    let failGrade = Number(input[0]);
    let index = 1;
    let line = input[index];
    let averageGrade = 0;
    let failCount = 0;
    let tasksCount = 0;
    let isStudentFail = true;
    let taskName = "";


    while (line !== "Enough") {
        taskName = line;
        index++;
        let taskGrade = Number(input[index]);

        if (failCount === failGrade) {
            console.log(`You need a break, ${failCount} poor grades.`);
            isStudentFail = false;
            break;
        }

        averageGrade += taskGrade;
        tasksCount++;

        if (taskGrade <= 4) {
            failCount++;
        }


        index++;
        line = input[index];
    }


    if (isStudentFail) {
        console.log(`Average score: ${(averageGrade / tasksCount).toFixed(2)}`);
        console.log(`Number of problems: ${tasksCount}`);
        console.log(`Last problem: ${taskName}`);
    }
}
studentsTaskGrades(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);