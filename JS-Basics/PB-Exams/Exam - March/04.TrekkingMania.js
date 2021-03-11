function trekkingPeopleCount(input) {

    let groupCount = Number(input[0]);

    // Група до 5 човека– Мусала
    // Група от 6 до 12 – Монблан
    // Група от 13 до 25 – Килиманджаро
    // Група от 26 до 40 – К2
    // Група от 41 или повече – Еверест

    let peopleForMusala = 0;
    let peopleForMonblan = 0;
    let peopleForKilimanjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;
    let allPeoplesForTrekking = 0;

    for (let i = 1; i <= groupCount; i++) {
        let peopleOfGroup = Number(input[i]);
        allPeoplesForTrekking += peopleOfGroup;

        if (peopleOfGroup <= 5) {
            peopleForMusala += peopleOfGroup;
        } else if (peopleOfGroup >= 6 && peopleOfGroup <= 12) {
            peopleForMonblan += peopleOfGroup;
        } else if (peopleOfGroup >= 13 && peopleOfGroup <= 25) {
            peopleForKilimanjaro += peopleOfGroup;
        } else if (peopleOfGroup >= 26 && peopleOfGroup <= 40) {
            peopleForK2 += peopleOfGroup;
        } else if (peopleOfGroup >= 41) {
            peopleForEverest += peopleOfGroup;
        }

    }
// Първи ред - процентът изкачващи Мусала
// Втори ред – процентът изкачващи Монблан
// Трети ред – процентът изкачващи Килиманджаро
// Четвърти ред – процентът изкачващи К2
// Пети ред – процентът изкачващи Еверест

peopleForMusala = peopleForMusala / allPeoplesForTrekking * 100;
peopleForMonblan = peopleForMonblan / allPeoplesForTrekking * 100;
peopleForKilimanjaro = peopleForKilimanjaro / allPeoplesForTrekking * 100;
peopleForK2 = peopleForK2 / allPeoplesForTrekking * 100;
peopleForEverest = peopleForEverest / allPeoplesForTrekking * 100;

console.log(peopleForMusala.toFixed(2) + "%");
console.log(peopleForMonblan.toFixed(2) + "%");
console.log(peopleForKilimanjaro.toFixed(2) + "%");
console.log(peopleForK2.toFixed(2) + "%");
console.log(peopleForEverest.toFixed(2) + "%");



}
trekkingPeopleCount(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);