function printCharacter (input){

   let text = input[0];
    
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);

        console.log(char);
        
    }
}
printCharacter(["softuni"]);