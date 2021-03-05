function shopList(input) {

// input
    let petersBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramMemory = Number(input[3]);

// calculate price of products 
let cardsPrice = videoCardsCount * 250;
let procesorsPrice = cardsPrice * 0.35;
let ramMemoryPrice = cardsPrice * 0.10;

procesorsPrice *= procesorsCount;
ramMemory *= ramMemoryPrice;

let totalPrice = cardsPrice + procesorsPrice + ramMemory;

if(videoCardsCount > procesorsCount){
    totalPrice *= 0.85;
}

//output
if(totalPrice <= petersBudget){
    petersBudget -= totalPrice;
    console.log(`You have ${petersBudget.toFixed(2)} leva left!`);
}else {
    totalPrice -= petersBudget;
    console.log(`Not enough money! You need ${totalPrice.toFixed(2)} leva more!`)
}

}
shopList(["900",
"2",
"1",
"3"]);