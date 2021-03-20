function makeOfProcessors(input) {

    let neededProcessors = Number(input[0]);
    let employeesCount = Number(input[1]);
    let workDays = Number(input[2]);


    let processorsPrice = 0;

    let workHours = (employeesCount * workDays) * 8;
    let madeProcessors = Math.floor(workHours / 3);


    if (madeProcessors >= neededProcessors) {
        let diff = madeProcessors - neededProcessors;
        processorsPrice = diff * 110.10;
        console.log(`Profit: -> ${processorsPrice.toFixed(2)} BGN`);
    } else {
        let diff = neededProcessors - madeProcessors;
        processorsPrice = diff * 110.10;
        console.log(`Losses: -> ${processorsPrice.toFixed(2)} BGN`);
    }

}
makeOfProcessors(["500",
    "8",
    "20"]);
makeOfProcessors(["150",
    "7",
    "18"]);