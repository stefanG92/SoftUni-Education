function theProduct (input){
    let product = input[0];

    // :  banana, apple, kiwi, cherry, lemon и grapes
    let theProductIs = "";

    switch(product){
        case "banana":
            theProductIs = "fruit";
            break;
            case "apple":
            theProductIs = "fruit";
            break;
            case "kiwi":
            theProductIs = "fruit";
            break;
            case "cherry":
            theProductIs = "fruit";
            break;
            case "lemon":
            theProductIs = "fruit";
            break;
            case "grapes":
            theProductIs = "fruit";
            break;
            // :  tomato, cucumber, pepper и carrot
            case "tomato":
                theProductIs = "vegetable";
                break;
                case "cucumber":
                theProductIs = "vegetable";
                break;
                case "pepper":
                theProductIs = "vegetable";
                break;
                case "carrot":
                    theProductIs = "vegetable";
                    break;
                    default:
                        theProductIs = "unknown";
                        break;
            
    }
    console.log(theProductIs);



}
theProduct(["tomato"]);