function productsPrice(input) {

    let fruit = input[0];
    let day = input[1];
    let qunatity = input[2];


    // price for product in Work days
    // плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
    // цена	2.50	1.20	0.85	1.45	    2.70	5.50	     3.85
    // (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)

    let totalPrice = 0;
    let isValid = true;

    switch (day) {
        case "Monday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.50;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.20;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 3.85;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Tuesday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.50;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.20;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 3.85;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Wednesday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.50;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.20;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 3.85;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Thursday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.50;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.20;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 3.85;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Friday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.50;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.20;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 3.85;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        // free days of weeks
        case "Saturday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.25;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.90;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.60;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 3.00;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.60;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 4.20;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Sunday":
            if (fruit === "banana") {
                totalPrice = qunatity * 2.70;
            } else if (fruit === "apple") {
                totalPrice = qunatity * 1.25;
            } else if (fruit === "orange") {
                totalPrice = qunatity * 0.90;
            } else if (fruit === "grapefruit") {
                totalPrice = qunatity * 1.60;
            } else if (fruit === "kiwi") {
                totalPrice = qunatity * 3.00;
            } else if (fruit === "pineapple") {
                totalPrice = qunatity * 5.60;
            } else if (fruit === "grapes") {
                totalPrice = qunatity * 4.20;
            } else {
                isValid = false;
                console.log("error");
            }
            break;
        default:
            isValid = false;
            console.log("error");
            break;

    }
    if (isValid) {
        console.log(totalPrice.toFixed(2));
    }

}
productsPrice(["tomato",
    "Monday",
    "0.5"]);