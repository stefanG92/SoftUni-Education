function schoolsMaterialsCosts (input){

    let packageOfPens = Number (input[0]);
    let packageOfMarkers = Number (input[1]);
    let preparationLitres = Number (input[2]);
    let gift = Number (input[3]);


   
    let pensPrice = packageOfPens * 5.80;
    let markersPrice = packageOfMarkers * 7.20;
    let preparationPrice = preparationLitres * 1.20;

     gift = gift / 100;

     let productsPrice = pensPrice + markersPrice + preparationPrice;
     productsPrice = productsPrice - (productsPrice * gift);


     console.log(productsPrice.toFixed(3));
}
schoolsMaterialsCosts(["2",
"3",
"2.5",
"25"]);
