function readBook(input) {

    let pages = Number(input[0]);
    let hours = Number(input[1]);
    let days = Number(input[2]);


    let totalTimeForRead = pages / hours;



    console.log(totalTimeForRead / days);


}
readBook(["432",
    "15",
    "4"]);