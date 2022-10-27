"use strict"

// This is how you get a random number between 50 and 100
 let allCones = Math.floor(Math.random() * 50) + 50;

do {


  let conesToSell = Math.floor(Math.random() * 5) + 1;

  if (allCones - conesToSell < 0) {
    console.log("I can't sell you " + conesToSell + " cones. I only have " + allCones + ".");
  } else {
    console.log(" number of cones before selling " + allCones);
    allCones -= conesToSell;
    console.log(conesToSell + "cones sold.");

  }


}while(allCones > 0);
console.log("All cones have be sold!");




