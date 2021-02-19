function calculateComision(input) {

    let town = input[0];
    let valueOfSells = Number(input[1]);

    // Град	 0 ≤ s ≤ 500	500 < s ≤ 1 000	  1 000 < s ≤ 10 000	s > 10 000
    // Sofia	    5%	          7%	          8%	           12%
    // Varna	    4.5%	      7.5%	          10%	           13%
    // Plovdiv	    5.5%	      8%	          12%	          14.5%
    let comisionSize = 0;
    let isValid = true;

    switch (town) {
        case "Sofia":
            if (valueOfSells > 0) {
                if (valueOfSells >= 0 && valueOfSells <= 500) {
                    comisionSize = (valueOfSells * 0.5) / 10;
                } else if (valueOfSells < 500 && valueOfSells <= 1000) {
                    comisionSize = (valueOfSells * 0.7) / 10;
                } else if (valueOfSells < 1000 || valueOfSells <= 10000) {
                    comisionSize = valueOfSells * 0.8;
                } else if (valueOfSells > 10000) {
                    comisionSize = valueOfSells * 0.12;
                }

            } else {
                isValid = false;
                console.log("error");
            }


            break;
        case "Varna":
            if (valueOfSells > 0) {
                if (valueOfSells >= 0 && valueOfSells <= 500) {
                    comisionSize = (valueOfSells * 0.45) / 10;
                } else if (valueOfSells < 500 && valueOfSells <= 1000) {
                    comisionSize = (valueOfSells * 0.75) / 10;
                } else if (valueOfSells < 1000 || valueOfSells <= 10000) {
                    comisionSize = valueOfSells * 0.10;
                } else if (valueOfSells > 10000) {
                    comisionSize = valueOfSells * 0.13;
                }

            } else {
                isValid = false;
                console.log("error");
            }
            break;
        case "Plovdiv":
            if(valueOfSells > 0){
            if (valueOfSells >= 0 && valueOfSells <= 500) {
                comisionSize = (valueOfSells * 0.55) / 10;
            } else if (valueOfSells < 500 && valueOfSells <= 1000) {
                comisionSize = (valueOfSells * 0.8) / 10;
            } else if (valueOfSells < 1000 || valueOfSells <= 10000) {
                comisionSize = valueOfSells * 0.12;
            } else if (valueOfSells > 10000) {
                comisionSize = valueOfSells * 0.145;
            } 
               
            }else {
                isValid = false;
                console.log("error");
            }
            break;
        default:
            isValid = false;
            console.log("error");
    }
    if (isValid) {
        console.log(comisionSize.toFixed(2));
    }
}
calculateComision(["Plovdiv",
    "-20"]);