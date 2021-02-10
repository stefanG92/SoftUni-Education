function litresForAquarium (array){

    let lenght = Number (array[0]);
    let width = Number (array[1]);
    let height = Number (array[2]);
    let procent = Number (array[3]);

    let aquariumSize = lenght * width * height;
    let allLitres = aquariumSize * 0.001;
    procent *= 0.001;
    let clearProcent = 1 - 0.17;
    allLitres *= clearProcent;

    console.log(allLitres);
}
litresForAquarium(["105",
"77",
"89",
"18.5"]);