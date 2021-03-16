function fitnessVisitors(input) {

    let index = 0;
    let visitorsCount = Number(input[index]);
    let trainingBack = 0;
    let trainingChest = 0;
    let trainingLegs = 0;
    let trainingAbs = 0;
    let buyShake = 0;
    let buyBar = 0;
    let peopleForTraining = 0;
    let peopleForProtein = 0;


    for (let i = 1; i <= visitorsCount; i++) {
        let actionInFitness = input[i];

        // ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")

        switch (actionInFitness) {
            case "Back":
                trainingBack++;
                peopleForTraining++;
                break;
            case "Chest":
                trainingChest++;
                peopleForTraining++;
                break;
            case "Legs":
                trainingLegs++;
                peopleForTraining++;
                break;
            case "Abs":
                trainingAbs++;
                peopleForTraining++;
                break;
            case "Protein shake":
                peopleForProtein++;
                buyShake++;
                break;
            case "Protein bar":
                peopleForProtein++;
                buyBar++;
                break;
        }
    }


    // "{брой хора трениращи гръб} - back"
// "{брой хора трениращи гърди} - chest"
// "{брой хора трениращи крака} - legs"
// "{брой хора трениращи коремни мускули} - abs"
// "{брой хора закупили протеинов шейк} - protein shake"
// "{брой хора закупили протеинов блок} - protein bar"
// "{процент на хората дошли да тренират}% - work out"
// "{процент на хората дошли да купят протеин}% - protein"

console.log(`${trainingBack} - back`);
console.log(`${trainingChest} - chest`);
console.log(`${trainingLegs} - legs`);
console.log(`${trainingAbs} - abs`);
console.log(`${buyShake} - protein shake`);
console.log(`${buyBar} - protein bar`);
console.log(`${((peopleForTraining / visitorsCount) * 100).toFixed(2)}% - work out`);
console.log(`${((peopleForProtein / visitorsCount) * 100).toFixed(2)}% - protein`);


}
fitnessVisitors(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"]);