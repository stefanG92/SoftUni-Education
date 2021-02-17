function ageAndSex(input) {
    let age = Number(input[0]);
    let sex = (input[1]);


    // ⦁	"Mr." – мъж (пол 'm') на 16 или повече години
    // ⦁	"Master" – момче (пол 'm') под 16 години
    // ⦁	"Ms." – жена (пол 'f') на 16 или повече години
    // ⦁	"Miss" – момиче (пол 'f') под 16 години

    if (age >= 16 && sex === "m") {
        console.log("Mr.");
    } else if (age < 16 && sex === "m") {
        console.log("Master");
    } else if (age >= 16 && sex === "f") {
        console.log("Ms.");
    } else if (age < 16 && sex === "f") {
        console.log("Miss");
    }


}
ageAndSex(["12",
"f"]);