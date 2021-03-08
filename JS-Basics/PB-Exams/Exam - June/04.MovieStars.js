function salaryForActor(input) {

    let budgetForActors = Number(input[0]);
    let actorSalary = 0;
    let spendMoney = 0;
    let isEnaugh = true;

    let index = 1;

    let info = input[index];

    while (info !== "ACTION") {
        let actorName = info;
        index++;

        let namelength = actorName.length;



        if (namelength < 15) {
            actorSalary = Number(input[index]);
            index++;
            if (actorSalary > budgetForActors) {

                console.log(`We need ${(actorSalary - budgetForActors).toFixed(2)} leva for our actors.`);
                isEnaugh = false;
                break;
            }
            budgetForActors -= actorSalary;
            spendMoney += actorSalary;
        } else {
            actorSalary = budgetForActors * 0.20;

            if (actorSalary > budgetForActors) {

                console.log(`We need ${(actorSalary - budgetForActors).toFixed(2)} leva for our actors.`);
                isEnaugh = false;
                break;
            }

            budgetForActors -= actorSalary;
            spendMoney += actorSalary;
        }


        info = input[index];



    }

    if (isEnaugh) {
        console.log(`We are left with ${budgetForActors.toFixed(2)} leva.`);
    } 



}
salaryForActor(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"]);
salaryForActor(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);