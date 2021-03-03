function voucher(input) {

    let voucherValue = Number(input[0]);

    let index = 1;
    let str = input[index];
    let price = 0;
    let tickets = 0;
    let otherProduct = 0;

    while (str !== "End") {
        let product = str;
        index++;



        if (product.length > 8) {
            price = product.charCodeAt(0) + product.charCodeAt(1);

            if (price <= voucherValue) {
                voucherValue -= price;
                tickets++;
            } else {
                break;
            }


        } else if (product.length <= 8) {
            price = product.charCodeAt(0);

            if (price <= voucherValue) {
                voucherValue -= price;
                otherProduct++;
            } else {
                break;
            }

        }



        str = input[index];
    }


    console.log(`${tickets}`);
    console.log(`${otherProduct}`);
}
voucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"]);
voucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"]);