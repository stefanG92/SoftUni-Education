function outfitDress(input) {

    let gradus = Number(input[0]);
    let timeOfDay = input[1];


    let outfit = "";
    let shoes = "";



    if (gradus >= 10 && gradus <= 18) {
        if (timeOfDay === "Morning") {

            outfit = "Sweatshirt";
            shoes = "Sneakers";

        } else if (timeOfDay === "Afternoon") {

            outfit = "Shirt";
            shoes = "Moccasins";

        } else if (timeOfDay === "Evening") {

            outfit = "Shirt";
            shoes = "Moccasins";

        }

    } else if (gradus > 18 && gradus <= 24) {
        if (timeOfDay === "Morning") {

            outfit = "Shirt";
            shoes = "Moccasins";

        } else if (timeOfDay === "Afternoon") {

            outfit = "T-Shirt";
            shoes = "Sandals";

        } else if (timeOfDay === "Evening") {

            outfit = "Shirt";
            shoes = "Moccasins";
            
        }


    } else if (gradus >= 25) {
        if (timeOfDay === "Morning") {

            outfit = "T-Shirt";
            shoes = "Sandals";

        } else if (timeOfDay === "Afternoon") {

            outfit = "Swim Suit";
            shoes = "Barefoot";

        } else if (timeOfDay === "Evening") {

            outfit = "Shirt";
            shoes = "Moccasins";
            
        }


    }



    // "Morning", "Afternoon", "Evening"



    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`);
}
outfitDress(["16",
"Morning"]);
outfitDress(["22",
"Afternoon"]);
outfitDress(["28",
"Evening"]);