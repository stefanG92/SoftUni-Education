function statisticOfGrades(input) {

    let arrivedStudents = Number(input[0]);
    let examAverageGrade = 0;
    let betweenTwo = 0;
    let betweenThree = 0;
    let betweenFour = 0;
    let betweenExellent = 0;

    for (let i = 1; i < input.length; i++) {
        let currentGrade = Number(input[i]);

        examAverageGrade += currentGrade;

        if (currentGrade >= 2.00 && currentGrade <= 2.99) {
            betweenTwo++;
        } else if (currentGrade >= 3.00 && currentGrade <= 3.99) {
            betweenThree++;
        } else if (currentGrade >= 4.00 && currentGrade <= 4.99) {
            betweenFour++;
        } else if (currentGrade >= 5.00) {
            betweenExellent++;
        }

    }

betweenExellent = betweenExellent / arrivedStudents * 100;
betweenFour = betweenFour / arrivedStudents * 100;
betweenThree = betweenThree / arrivedStudents * 100;
betweenTwo = betweenTwo / arrivedStudents * 100;
examAverageGrade = examAverageGrade / arrivedStudents;

console.log(`Top students: ${betweenExellent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${betweenFour.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${betweenThree.toFixed(2)}%`);
console.log(`Fail: ${betweenTwo.toFixed(2)}%`);
console.log(`Average: ${examAverageGrade.toFixed(2)}`);



}
statisticOfGrades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);