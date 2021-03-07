function cakeParts(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let index = 2;
    let line = input[index];

    let cakeSize = width * length;
    let allPiece = 0;
    let enaughtPieces = true;

    while (line !== "STOP") {
        let pieceCount = Number(line);
        index++;

        allPiece += pieceCount;

        if (allPiece >= cakeSize) {
            console.log(`No more cake left! You need ${allPiece - cakeSize} pieces more.`);
            enaughtPieces = false;
            break;
        }





        line = input[index];
    }

    if (enaughtPieces) {
        if (allPiece <= cakeSize) {
            console.log(`${cakeSize - allPiece} pieces are left.`);
        }
    }


}
cakeParts(["10",
"2",
"2",
"4",
"6",
"STOP"]);
