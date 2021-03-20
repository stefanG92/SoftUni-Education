function adressForGifts(input) {

    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let adresses = "";

    for (let a = M; a >= N; a--) {

        if (a % 2 === 0 && a % 3 === 0) {
            if (S !== a) {
                adresses += "" + a + " ";
            } else {
                break;
            }

        }

    }
    console.log(adresses);
}
// adressForGifts(["1",
// "30",
// "15"]);
adressForGifts(["20",
"1000",
"36"]);