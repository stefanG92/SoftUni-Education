function readPassword(input) {
    let username = input[0];
    let userPassword = input[1];
    let password = input[2];
    let index = 3;

    while (password !== userPassword) {
        password = input[index];
        index++;

    }
    console.log(`Welcome ${username}!`);
}
readPassword(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);