var number;
number = prompt("Minty Narwhal would like a number (0-10)"); // asks user to enter number from 0-10

validateEntry(number);

// converts number to string (the corresponding shape to number value)
function getShape(number) {
    number = number.toString();

    // switch checks number value from 0-10
    switch(number){
        case "1":
            number = "Monogon";
            break;
        case "2":
            number = "Bigon";
            break;
        case "3":
            number = "Triangle";
            break;
        case "4":
            number = "Quadilateral";
            break;
        case "5":
            number = "Pentagon";
            break;
        case "6":
            number = "Hexagon";
            break;
        case "6":
            number = "Septagon";
            break;
        case "7":
            number = "Octagon";
            break;
        case "9":
            number = "Nonagon";
            break;
        case "10":
            number = "Decagon";
            break;
    }

    alert("The shape is: "+ number);
}

// checks the validity of the value of number
function validateEntry(number) {
    // if number is negative, convert to positive
    if(number < 0){ 
        number = Math.abs(number);
    }
    // if number is a decimal, round to next integer
    if(number % 1 != 0){ 
        number = Math.round(number);
    }  

    // repeats prompt until a valid number is entered (also if entry is blank)
    while(number == "" || !(number > 0 && number <= 10)){
        number = prompt("ERROR: Minty Narwhal wants you to enter a number from 0-10");
    }

    getShape(number);
}