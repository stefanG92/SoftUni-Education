function equipmentPrice(input) {

    let yearTaxe = Number(input[0]);


    let shoesPrice = yearTaxe * 0.60;
    let ekipPrice = shoesPrice * 0.80;
    let ballPrice = ekipPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalPrice = yearTaxe + shoesPrice + ekipPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice.toFixed(2));

}
equipmentPrice(["320"]);