// Write a function that when passed an object will return the value of the object’s price property.
// Ex.let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// function getPrice(obj){
//     return obj.price;
// }
//
// let potatoes ={
//     name: "Potatoes",
//     quantity: 2,
//     price: "$7.89"
// };
//
//
// let dereck ={
//     name:"Dereck Rascon",
//     age:"30"
// }
//
//
// console.log(getPrice(potatoes))
// console.log(getPrice(name))


// TODO Write a function that takes in an array of objects and returns the object with the largest height property.

//
//
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// //
// // function height(hamster) {
// //     let tallest = {heightInMM: 0};
// //     hamster.forEach(function (hamsters) {
// //         if (hamsters.heightInMM > tallest.heightInMM) {
// //             tallest = hamsters;
// //         }
// //     });
// //     return tallest;
// // }
// // console.log(height(hamsters));
//
// function largestHeight(arr){
//
// }

// TODO Write a function called fizzBuzz from 1-100.

//      function fizzBuzz(){
//     for(let i = 1; i < 100; i++){
//         if(i % 15 === 0){
//             console.log("FizzBuzz");
//         } else if(i % 3 === 0) {
//             console.log("Fizz");
//         } else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();


//TODO Write a function that takes in an array of objects and returns the average of the heightInMM properties from each abject.
//Ex. getAverageHeight(hamster);// should return 93.2;

// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
//     ];
//
//     function averageHeight(array) {
//         let totalHeight = 0;
//         for (let element of array){
//             totalHeight += element.heightInMM;
//         }
//         return totalHeight / array.length;
//       }
//
// console.log(averageHeight(hamsters));

// TODO Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurances of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter

function charCount(str, letter){
    let letterCount= 0;
    for(let position = 0; position < str.length; position++){
        if(str.charAt(position) === letter){
           letterCount += 1;
        }
    }
    return letterCount;
}

console.log(charCount("Mississippi", "s"))

//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php

//TODO Write a function that takes in an array of grocery item objects and returns the object with the highest weightInGrams property.

const cart = [
    {
        name: "Kingsford Charcoal",
        weightInGrams: 4535
    }, {
        name: "Krazy Glue",
        weightInGrams: 5
    }, {
        name: "NVIDIA RTX 4090",
        weightInGrams: 2186
    } ];

function groceryItem(array){
    let highest = {weightInGrams: 0};
    cart.forEach(function(carts){
        if(cart.weightInGrams < highest.weightInGrams){
            highest = cart;
        }
    });
    return highest;
}

console.log(groceryItem(cart));


