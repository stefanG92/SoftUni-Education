function roomNumbers(input) {

    let levelCount = Number(input[0]);
    let roomsCount = Number(input[1]);



    for (let i = levelCount; i > 0; i--) {
        let room = "";
        for (let j = 0; j < roomsCount; j++) {

            if (i == levelCount) {
                room += `L${i}${j} `

            } else {

                if (i % 2 == 0) {
                    room += `O${i}${j} `;
                } else {
                    room += `A${i}${j} `;
                }
            }


        }

        console.log(room);

    }
}
roomNumbers(["6", "4"]);