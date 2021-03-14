function sellTickets(input) {

    let student = 0;
    let standard = 0;
    let kid = 0;

    let totalTicketsCount = 0;


    for (let i = 0; i < input.length; i++) {
        if (input[i] == "End" || input[i] === "Finish") {
            break;
        }

        //("student", "standard", "kid")

        let nameFilm = input[i];
        i++;
        let freeSpaces = Number(input[i]);
        i++;
        let currentTicketsCount = 0;

        while (input[i] != "End" && input[i] != "Finish") {


            totalTicketsCount++;
            currentTicketsCount++;

            switch (input[i]) {
                case "student":
                    student++;
                    break;
                case "standard":
                    standard++;
                    break;
                case "kid":
                    kid++;
                    break;

            }

            if (currentTicketsCount == freeSpaces) {
                break;
            }

            i++;

        }
        console.log(`${nameFilm} - ${((currentTicketsCount / freeSpaces) * 100).toFixed(2)}% full.`);


    }

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${((student / totalTicketsCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTicketsCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTicketsCount) * 100).toFixed(2)}% kids tickets.`);

}

sellTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);