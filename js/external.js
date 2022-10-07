 "use strict";
//
console.log('Hello from external JavaScript!');

alert("Welcome to My Website!");

let inputUser = prompt('What is your favorite color?');
console.log('The user entered: ' + inputUser);

alert("Cool my favorite color is "+ inputUser +" too!");
//
// The following is #3 part 1
let pricePerDay = prompt("How much does it cost to rent a movie?");
let littleMermaid = prompt("How many days would you like to rent The Little Mermaid?");
console.log("The user entered: " + littleMermaid);
let brotherBear = prompt("How many days would you like to rent Brother Bear?");
console.log("The user entered: " + brotherBear);
let hercules = prompt("How many days would you like to rent Hercules?");
console.log("The user entered: " + hercules);

alert("This transaction will be $" + ((littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay)));
//
// //
// // //the following is for #3 part 2
let googleHours = parseFloat (prompt ("How many hours did you work for Google?"));
let payGoogle = parseFloat (prompt ("How much does Google pay you an hour?"));
let amazonHours = parseFloat (prompt ("How many hours did you work for Amazon?"));
let payAmazon = parseFloat (prompt ("How much does Amazon pay you an hour?"));
let faceBookHours = parseFloat (prompt ("How many hours did you work for Facebook?"));
let payFaceBook = parseFloat (prompt("How much does Facebook pay you an hour?"));

alert("Your total pay is $" + ((payGoogle * googleHours) + (payAmazon * amazonHours) + (payFaceBook * faceBookHours)));
//
//This state below is for me to see how i did it first and work around it so the code can work for the statement above.
// let userInput = prompt('How many hours did you work for Google?:');
// console.log('The user entered: ' + userInput);
//
// let userInput = prompt('How many hours did you work for Amazon?:');
// console.log('The user entered: ' + userInput);
//
// let userInput = prompt('How many hours did you work for Facebook?:');
// console.log('The user entered: ' + userInput);
//
//let payGoogle = 400 * (userInput);
//
// let payAmazon = 380 * (userInput);
//
//let payFaceBook = 350 * (userInput);
//
//alert("The total amount made is ("+payGoogle+", "+payAmazon+", "+payFaceBook+") dollars.");
//
//The following is for #3 part 3
//
let classNotFull = confirm("Is the class Coding101 full? (Ok = Yes / Cancel = No)");

let classConflict = confirm("Does the class conflict with your schedule? (Ok = Yes / Cancel = No)");

if (classConflict === true  || classNotFull === true) {
    alert("You cannot register for this class.");
}else {
    alert("You can register for this class.");
}

let premiumMember = confirm("Are you a Premium Member? (OK = Yes / Cancel = NO)");
let productItems = confirm("Do you have more than 2 items? (Ok = Yes / Cancel = No)");
let offerValid = confirm("Is your offer still valid?")

alert ("Can the customer still have the discount: " + (premiumMember || productItems > 2 && offerValid ));






