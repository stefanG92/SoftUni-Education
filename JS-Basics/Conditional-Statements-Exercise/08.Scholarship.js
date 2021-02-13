function giveScholarship(input) {
    //readed information for student

    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minSalary = Number(input[2]);


    //  type  scholarships 


    let isGetScholarship = true;
    let socialScholarship = 0;
    let exellentScholarship = 0;

    if (income < minSalary && averageGrade > 4.5) {
        socialScholarship = minSalary * 0.35;

    } else if (averageGrade >= 5.5) {
        exellentScholarship = averageGrade * 25;
    } else {
        console.log("You cannot get a scholarship!");
        isGetScholarship = false;
       
    }

    if(isGetScholarship){
    if (socialScholarship > exellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (exellentScholarship >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(exellentScholarship)} BGN`);
    }
}

}
 giveScholarship(["480.00",
 "4.60",
 "450.00"]);
giveScholarship(["300.00",
"5.65",
"420.00"]);