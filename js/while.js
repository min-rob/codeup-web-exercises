/* while squared */

// let i = 2;

// while (i <= 65536) {
//   console.log("while loop iteration, squared:", i);
//   i *= 2;
// }

/* An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
 */

let coneStock = Math.floor(Math.random() * 50) + 50;
console.log(`We have ${coneStock} cones.`);
do {
  let boughtByCustomer = Math.floor(Math.random() * 5) + 1;
  console.log(`Customer wants to buy ${boughtByCustomer} cones`);
  if (boughtByCustomer <= coneStock) {
    coneStock -= boughtByCustomer;
    console.log(`Sold ${boughtByCustomer} cones, ${coneStock} left.`);
  } else {
    console.log(
      `Can't sell more cones then we have! we have ${coneStock} left..`
    );
  }
} while (coneStock > 0);
console.log("We've sold all the icecream cones!");
