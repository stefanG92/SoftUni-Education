function freeSpace(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let h = Number(input[2]);

    let freeSpaceMetres = width * length * h;
    let isEnaught = true;
    

    let index = 3;

    let line = input[index];

    while (line !== "Done") {
        let luggageSize = Number(line);


        if (luggageSize < freeSpaceMetres) {
            freeSpaceMetres -= luggageSize;
        } else {
            luggageSize -= freeSpaceMetres;
            console.log(`No more free space! You need ${luggageSize} Cubic meters more.`);
            isEnaught = false;
            break;
        }


        index++;
        line = input[index];
    }

    if (freeSpaceMetres > 0) {
        if(isEnaught){
            console.log(`${freeSpaceMetres} Cubic meters left.`);
        }
       
    }
}
freeSpace(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
freeSpace(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);