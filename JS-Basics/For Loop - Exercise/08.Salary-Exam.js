function salaryFine(input) {

    let tabCount = Number (input[0]);
    let salary = Number (input[1]);
    let haveSalary = true;


    for (let i = 2; i <= input.length - 1; i++) {
        let nameWebsite = input[i];



        if(nameWebsite === "Facebook"){
            salary -= 150;
        }else if(nameWebsite === "Instagram"){
            salary -= 100;
        }else if(nameWebsite === "Reddit"){
            salary -= 50;
        }
        
        
        if(salary <= 0){
            console.log("You have lost your salary.");
            haveSalary = false;
            break;
        }

        
    }

    if(haveSalary){
        console.log(Math.trunc(salary));
    }
}
salaryFine(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);
