"use strict";

console.log('Hello from external JavaScript!');

alert("Welcome to My Website!")

var userInput = prompt('What is your favorite color?:');
console.log('The user entered: ' + userInput);

alert("Cool my favorite color is "+ userInput +" too!.");

// The following is #3 part 1
var userInput = prompt('How many days would you like to rent The Little Mermaid?:');
console.log('The user entered: ' + userInput);


var userInput = prompt('How many days would you like to rent Brother Bear?:');
console.log('The user entered: ' + userInput);

var userInput = prompt('How many days would you like to rent Hercules?:');
console.log('The user entered: ' + userInput);

var total = (userInput * 3 )

alert("This transaction will be "+ total +" dollars");


//the following is for #3 part 2

var userInput = prompt('How many hours did you work for Google?:');
console.log('The user entered: ' + userInput);

var userInput = prompt('How many hours did you work for Amazon?:');
console.log('The user entered: ' + userInput);

var userInput = prompt('How many hours did you work for Facebook?:');
console.log('The user entered: ' + userInput);

var payGoogle = 400 * (userInput);

var payAmazon = 380 * (userInput);

var payFaceBook = 350 * (userInput);

alert("The total amount made is ("+payGoogle+", "+payAmazon+", "+payFaceBook+") dollars.");

// The following is for #3 part 3

var classNotFull = confirm("is the class full? (Ok = Yes / Cancel = No)");

var classConflict = confirm("Does the class conflict with your schedule? (Ok = Yes / Cancel = No)");

if (classConflict == true  || classNotFull == true) {
    alert("You cannot register for this class.");
}else {
    alert("You can register for this class.");
}

let premiumMember = confirm("Are you a Premium Member? (OK = Yes / Cancel = NO)");
let productItems = confirm("Do you have more than 2 items? (Ok = Yes / Cancel = No)");
let offerValid = confirm("Is your offer still valid?")

alert ("Can the customer still have the discount: " + (premiumMember || productItems > 2 && offerValid ));






