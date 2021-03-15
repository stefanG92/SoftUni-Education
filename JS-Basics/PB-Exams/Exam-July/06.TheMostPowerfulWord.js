function powerWord(input) {


    let mostPowerWord = "";
    let theMostPower = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentWord = input[i];

        while (currentWord !== "End of words") {
            let word = currentWord;
            let sumPower = 0;

            let isMultiply = false;
            let firstLetter = word.charAt(0);
            for (let a = 0; a < word.length; a++) {
                let letter = word.charAt(a);
                

                sumPower += letter.charCodeAt(0);

                if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" ||
                    firstLetter === "u" || firstLetter === "y") {
                    isMultiply = true;


                } else if (firstLetter === "A" || firstLetter === "E" || firstLetter === "I" || firstLetter === "O" ||
                    firstLetter === "U" || firstLetter === "Y") {
                    isMultiply = true;



                } else {

                    isMultiply = false;
                    

                }

            }
            if (isMultiply) {
                sumPower *= word.length;
            }else {
                sumPower = Math.floor(sumPower / word.length);
            }

            if (sumPower > theMostPower) {
                theMostPower = sumPower;
                mostPowerWord = word;
            }


            i++;
            currentWord = input[i];
        }

    }

    console.log(`The most powerful word is ${mostPowerWord} - ${theMostPower}`);




}
powerWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"]);
    powerWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);
