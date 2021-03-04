function income(movieName, typeOfHall,ticketsCount) {

    ticketsCount = Number(ticketsCount);

    let incomeOfMovie = 0;

    switch (movieName) {
        case "A Star Is Born":
            switch (typeOfHall) {
                case "normal":
                    incomeOfMovie = 7.50;
                    break;
                case "luxury":
                    incomeOfMovie = 10.50;
                    break;
                case "ultra luxury":
                    incomeOfMovie = 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (typeOfHall) {
                case "normal":
                    incomeOfMovie = 7.35;
                    break;
                case "luxury":
                    incomeOfMovie = 9.45;
                    break;
                case "ultra luxury":
                    incomeOfMovie = 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (typeOfHall) {
                case "normal":
                    incomeOfMovie = 8.15;
                    break;
                case "luxury":
                    incomeOfMovie = 10.25;
                    break;
                case "ultra luxury":
                    incomeOfMovie = 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (typeOfHall) {
                case "normal":
                    incomeOfMovie = 8.75;
                    break;
                case "luxury":
                    incomeOfMovie = 11.55;
                    break;
                case "ultra luxury":
                    incomeOfMovie = 13.95;
                    break;
            }
            break;

    }
    // The Favourite	    8.75 лв.	11.55 лв.	13.95 лв.
    incomeOfMovie *= ticketsCount;

    console.log(`${movieName} -> ${incomeOfMovie.toFixed(2)} lv.`);
}
income(["A Star Is Born",
"luxury",
"42"]);
income(["Green Book",
"normal",
"63"]);
income(["The Favourite",
"ultra luxury",
"34"]);
