function findFavoriteBook(input) {
    let favoriteBook = input[0];
    let index = 1;

    let line = input[index];
    let booksCount = 0;
    let isfindBook = false;

    while (line !== "No More Books") {
        let currentBook = line;

        if (currentBook !== favoriteBook) {
            booksCount++;
        } else {
            console.log(`You checked ${booksCount} books and found it.`);
            isfindBook = true;
            break;
        }


        index++;
        line = input[index];
    }

    if (!isfindBook) {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCount} books.`);
    }
}
findFavoriteBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);