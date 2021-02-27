function changeValute (input){

    let bitcoinCount = Number (input[0]);
    let japanIuanCount = Number (input[1]);
    let comision = Number (input[2]);

    //calculate valute

    let bitcoinForLv = bitcoinCount * 1168;
    let iuanTotal= japanIuanCount * 0.15;
    let UsnInLv = iuanTotal * 1.76;
    let euroValue = 1.95;

    let total = (bitcoinForLv + UsnInLv) / euroValue;

    let comisionInProcent = comision * 10 / 100;
    let result = (total * comisionInProcent) / 10;

    let allMoneyInEuro = total - result;

// format to second symbol
    console.log(allMoneyInEuro.toFixed(2));
}
calculateValute([1,
    5,
    5]);