function fitnesCardsPrice(input) {

    let existingMoney = Number(input[0]);
    let personSex = input[1];
    let personAge = Number(input[2]);
    let sport = input[3];

    //Пол	 Gym	Boxing	Yoga	Zumba	Dances	Pilates
    //мъж	 $42	$41	    $45	     $34	$51	      $39
    //жена   $35	$37	    $42	     $31	$53	      $37


    let cardPrice = 0;

    switch (personSex) {
        case "m":
            switch (sport) {
                case "Gym":
                    cardPrice = 42;
                    break;
                case "Boxing":
                    cardPrice = 41;
                    break;
                case "Yoga":
                    cardPrice = 45;
                    break;
                case "Zumba":
                    cardPrice = 34;
                    break;
                case "Dances":
                    cardPrice = 51;
                    break;
                case "Pilates":
                    cardPrice = 39;
                    break;

            }
            if (personAge <= 19) {
                cardPrice *= 0.80;
            }
            break;

        case "f":
            switch (sport) {
                case "Gym":
                    cardPrice = 35;
                    break;
                case "Boxing":
                    cardPrice = 37;
                    break;
                case "Yoga":
                    cardPrice = 42;
                    break;
                case "Zumba":
                    cardPrice = 31;
                    break;
                case "Dances":
                    cardPrice = 53;
                    break;
                case "Pilates":
                    cardPrice = 37;
                    break;

            }
            if (personAge <= 19) {
                cardPrice *= 0.80;
            }
            break;
    }

    if(cardPrice <= existingMoney){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else {
        let diff = cardPrice - existingMoney;
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }

}
fitnesCardsPrice(["50",
"m",
"23",
"Gym"]);
fitnesCardsPrice(["20",
"f",
"15",
"Yoga"]);
fitnesCardsPrice(["10",
"m",
"50",
"Pilates"]);