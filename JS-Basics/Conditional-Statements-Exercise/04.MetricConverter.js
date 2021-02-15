function convertor(input) {

    let numberForConvertor = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];

    if (inputUnit === "m") {
        numberForConvertor = numberForConvertor / 1;
    } else if (inputUnit === "cm") {
        numberForConvertor = numberForConvertor / 100;
    } else if (inputUnit === "mm") {
        numberForConvertor = numberForConvertor / 1000;
    }

    if (outputUnit === "m") {
        numberForConvertor *= 1;
    } else if (outputUnit === "cm") {
        numberForConvertor *= 100;
    } else if (outputUnit === "mm") {
        numberForConvertor *= 1000;
    }



    console.log(numberForConvertor.toFixed(3))
}
convertor(["12","mm","m"]);