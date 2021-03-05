function sellGames(input) {

    let n = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= n; i++) {
        let gameName = input[i];


        if (gameName === "Hearthstone") {
            hearthstone++;
        } else if (gameName === "Fornite") {
            fornite++;
        } else if (gameName === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }

    }

    hearthstone = hearthstone / n * 100;
    fornite = fornite / n * 100;
    overwatch = overwatch / n * 100;
    others = others / n * 100;


    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`);


}
sellGames(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);
    sellGames(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"]);