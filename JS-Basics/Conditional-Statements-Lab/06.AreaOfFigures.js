function figures (input){

    let figureType = input[0];

    let area = 0;

    if (figureType === "square"){
      
        let lenght = Number (input[1]);
        area = lenght * lenght;

    }else if (figureType === "rectangle"){

        let lenghtSide = Number (input[1]);
        let  widthSide = Number (input[2]);
        
        area = lenghtSide * widthSide;


    }else if (figureType === "circle"){

        let radius = Number (input[1]);
        area = radius * radius * Math.PI;


    }else if (figureType === "triangle"){

        let lenghtSideOfTriangle = Number (input[1]);
        let h = Number (input[2]);

        area = lenghtSideOfTriangle * h / 2;
    }

    console.log(area.toFixed(3));
    

}
figures(["square", "5"]);