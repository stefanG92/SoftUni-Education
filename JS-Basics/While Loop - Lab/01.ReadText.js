function read(input) {

    let index = 0;

    while (true) {
        let name = input[index];
        index++;

        if (name === "Stop") {
            break;
        }
        console.log(name);
    }
}
read(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);