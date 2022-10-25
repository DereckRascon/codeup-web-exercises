// Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

function getPrice(obj){
    return obj.price;
}

let potatoes ={
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};


let dereck ={
    name:"Dereck Rascon",
    age:"30"
}


console.log(getPrice(potatoes))
console.log(getPrice(dereck))

function getLongestString(arr) {
    let longestStr = "";
    for (let str of arr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return longestStr;
}

const colors = ["Green", "Blue", "Periwinkle"];

console.log(getLongestString(colors));


