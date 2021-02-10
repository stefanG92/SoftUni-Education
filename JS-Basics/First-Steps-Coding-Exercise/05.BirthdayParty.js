function birthday(rent) {

    rent = Number(rent);

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let result = cake + drinks + animator + rent;

    console.log(result);

}
birthday(["2250"]);