function textLength (input){

    var text = input[0].split(" ");
    
    if(text.length <= 10){
        console.log("The message was send successfully!");
    }else {
        console.log(`The message is too long to be send! Has ${text.length} words.`)
    }
       

    }
    textLength(["This message has ten words and you can send it!"]);