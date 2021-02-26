function years(input) {

    let leapYear = Number(input[0]);
    let normalYear = Number(input[1]);

    for (let i = leapYear; i <= normalYear; i += 4) {

        console.log(i)

    }
}
years(["1584",
    "1597"]);