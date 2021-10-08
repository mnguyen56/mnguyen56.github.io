var username, response;
var today = new Date();
var company = "Minty Narwhal Designs, Co.";

username = prompt("What is your name?");
response = prompt("How are you doing?");


document.getElementById("greeting").innerText = "Today is " + today.toDateString()
                                                + " and the time is: " + ((today.getHours() + 11) % 12 + 1) + ":" + today.getMinutes() + "."
                                                + "\n The " + company + " welcomes you, " + username + "!"
                                                + "\n We're glad you are doing " + response + "!";

// FUNCTION 1: refers to the list on my "Whimsical Brand" page                                                 
function pickAccessory() {
    var choices = ["Enamel Pins", "Keychains", "Bracelets", "Lanyards", "Earrings"];
    var random = Math.floor(Math.random() * choices.length);

    document.getElementById("accessory").innerText = "Here's our pick for you: " + choices[random];
}

// FUNCTION 2
function designName() {
    var firstName, lastName, fullName;

    firstName = prompt("What is your first name?");
    lastName = prompt("What is your last name?");

    fullName = firstName + " " + lastName;
    document.getElementById("name").innerText = "Your designs will have the following name: " + fullName;
}

// FUNCTION 3 
function calculatePrice() {
    var numberOfItems, price;
    var total = 0;

    numberOfItems = prompt("Enter number of items");

    while(!isNaN){
        numberOfItems = prompt("ERROR: enter a valid number");
    }

    for(var i = 0; i < numberOfItems; i++) {
        price = prompt("Enter price of item #" + (i+1) + ":");

        while(isNaN(price)){
            price = prompt("ERROR: enter a valid price for item #" + (i+1) + ":");
        }
        total += parseFloat(price);
    }

    document.getElementById("total").innerText = "Your total price is: $" + total;
}

// FUNCTION 4
function subscription() {
    var email, number, choice;

    choice = prompt("Would you like to recieve news via E-mail or Text? Enter 1 for E-mail, 2 for Text, and 3 for both");

    while(choice != 1 && choice != 2 && choice != 3){
        choice = prompt("ERROR: Enter 1 for E-mail, 2 for Text, and 3 for both");
    }
    
    switch(parseInt(choice)){
        case 1:
            email = prompt("Enter your e-mail:");
            break;
        case 2:
            number = prompt("Enter your phone number (xxx-xxx-xxxx)");

            while(!(number.length == 12) || isNaN(number)) {
                number = prompt("ERROR: Enter a valid phone number (xxx-xxx-xxxx)");
            }
            break;
        case 3:
            email = prompt("Enter your e-mail:");
            number = prompt("Enter your phone number (xxx-xxx-xxx)");

            while(!(number.length == 12)) {
                number = prompt("ERROR: Enter a valid phone number (xxx-xxx-xxxx)");
            }
            break;
    }

    document.getElementById("subscribe").innerText = "Thank you for subscribing!";
}

// FUNCTION 5
function sendGiftCard() {
    var friend, email, choice, message;

    friend = prompt("What is your friend's name?");
    email = prompt("What is their email?");
    choice = prompt("Would you like to leave a message with your gift card? Enter Y or N");

    if(choice == "Y" || choice == "y"){
        message = prompt("Enter your message");
        document.getElementById("gift").innerText = "Success! we've sent your gift card to " + friend
                                                    + "\n with the message: "  + message;
    }
    else{
        document.getElementById("gift").innerText = "Success! we've sent your gift card to: " + friend;
    }
}