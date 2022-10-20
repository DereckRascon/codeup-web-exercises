// Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

function objectPrice(obj){
    return obj.price
}

let potatoes ={
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};
console.log(objectPrice())