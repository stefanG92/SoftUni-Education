function studentGrade(input) {
    let studentName = input[0];
    let averageGrade = 0;
    let studentFail = 0;
    let course = 1;


    let index = 1;

    while (course <= 12) {
        let yearGrade = Number(input[index]);
        index++;

        if (yearGrade >= 4.00) {
            averageGrade += yearGrade;
            course++;
            
        } else {
            studentFail++;
            if (studentFail > 1) {
                console.log(`${studentName} has been excluded at ${course} grade`);
                break;
            }
        }


    }
    if (course >= 12) {
        course = 12;
        console.log(`${studentName} graduated. Average grade: ${(averageGrade / course).toFixed(2)}`);
    }

}
studentGrade(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);