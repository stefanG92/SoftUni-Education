function animmal(input) {
    let inputAnimal = input[0];

    switch (inputAnimal) {
        case "dog":
            console.log("mammal")
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown")
    }
}
animmal(["cat"]);