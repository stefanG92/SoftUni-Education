function filmRating (input){

   let filmCounter = Number (input[0]);
   let filmName = "";
   let rating = 0;

   let filmWinner = "";
   let loserFilm = "";
   let filmHightesRating  = Number.MIN_VALUE;
   let filmLowestRating = Number.MAX_VALUE;
   let averageRating = 0;

   let index = 1;


    for (let i = 0; i < filmCounter; i++) {
        filmName = input[index];
        index++;
        rating = Number (input[index]);
        index++;
        

        averageRating += rating;

        if(rating > filmHightesRating){
            filmHightesRating = rating;
            filmWinner = filmName;
        }else if(rating < filmLowestRating){
            filmLowestRating = rating;
            loserFilm = filmName;
        }

        
    }

   

averageRating = averageRating / filmCounter;

console.log(`${filmWinner} is with highest rating: ${filmHightesRating.toFixed(1)}`);
console.log(`${loserFilm} is with lowest rating: ${filmLowestRating.toFixed(1)}`);
console.log(`Average rating: ${averageRating.toFixed(1)}`);


}
filmRating(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"]);