function neededMoneyForGarden (input){

    let metresForWork = Number (input[0]);

    let priceWithDiscount = (metresForWork * 7.61) * 0.82;

    let discount = (metresForWork * 7.61) * 0.18;


console.log(`The final price is: ${priceWithDiscount}`);
console.log(`The discount is: ${discount} lv.`);

}
neededMoneyForGarden(["550"]);