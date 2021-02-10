function market(array){
    //input
    let berriesPrice = Number (array[0]);
    let bananasKg = Number (array[1]);
    let orangesKg = Number (array[2]);7
    let raspberriesKg = Number (array[3]);
    let berriesKg = Number (array[4]);

    // price for product
    let raspberriesPrice = berriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let banansPrice = raspberriesPrice * 0.20;

    // total price for all product 
    let totalPrice = (berriesKg * berriesPrice )
     + (bananasKg * banansPrice)
      + (orangesKg * orangesPrice)
      + (raspberriesKg * raspberriesPrice);

      console.log(totalPrice)

}
market(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"]);