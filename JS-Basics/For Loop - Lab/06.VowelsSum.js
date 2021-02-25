function sumValue(input) {
    let text = input[0];

    // буква	    a	e	i	o	u
    // стойност  	1	2	3	4	5

    let value = 0;

    for (let i = 0; i < text.length; i++) {

        switch (text[i]) {
            case 'a':
                value += 1;
                break;
            case 'e':
                value += 2;
                break;
            case 'i':
                value += 3;
                break;
            case 'o':
                value += 4;
                break;
            case 'u':
                value += 5;
                break;

        }


    }
    console.log(value);

}
sumValue(["hello"]);