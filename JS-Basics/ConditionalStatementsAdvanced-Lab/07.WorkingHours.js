function workDays(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {

        if (day !== "Sunday") {
            console.log("open")
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}
workDays(["11",
"Sunday"]);