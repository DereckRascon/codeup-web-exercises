// Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
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
// console.log(getPrice(dereck))
//
// function getLongestString(arr) {
//     let longestStr = "";
//     for (let str of arr) {
//         if (str.length > longestStr.length) {
//             longestStr = str;
//         }
//     }
//     return longestStr;
// }
//
// const colors = ["Green", "Blue", "Periwinkle"];
//
// console.log(getLongestString(colors));

// TODO
//Write a function that takes in an array of objects and returns the object with the largest height property.

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

// TODO
//Write a function called fizzBuzz from 1-100.
function fizzBuzz(){
    for(let i = 1; i < 100; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else{
            console.log(i);
        }
    }
}
fizzBuzz();