/* 
Coding challenges
*/

/*
If n is 153, then m (the number of digits) is 3 and:
equation = m^m = n; ie. 1^m + 2^m etc.
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

Objective: Write a script to generate and output the first 25 narcissistic integers.
 */

// find the length of the number input which equals to m.
// then from an input of a number turn it into an array, aka 153 = [1,5,3]
// then cube each num within the array by 3
// return the array into a string or number then add the 3 of them up
// if they add up to the input then it is a narcissisticNum.

// const isNarcissisticNum = (n) => {
//   //   const lengthOfN = n.length;
//   let numString;
//   let toArray;
//   if (isNaN(n)) {
//     //validation to determine if n is a numerical value
//     return console.log("Please enter a valid number.");
//   } else if (!isNaN(n) && typeof n === "number") {
//     // if it is a numerical value and it is a number
//     numString = n.toString(); // convert to a string
//     console.log("this is a string now", numString);
//     let result = "";
//     for (let i = 0; i < numString.length; i++) {
//       // loop through the string to add a comma between each char.
//       result += numString[i];
//       if (i < numString.length - 1) {
//         result += ",";
//       }
//     }
//     let newResult = []; //set empty array as a variable
//     toArray = result.split(","); //turning the string into an array by splitting.
//     console.log("This is back to an array", toArray);
//     for (let j = 0; j < toArray.length; j++) {
//       // looping the array to power each num in the array by the length of the original input
//       newResult.push(Math.pow(toArray[j], numString.length));
//     }
//     console.log("This should return cubed of each number in array", newResult);
//     let addedAmount = newResult[0] + newResult[1] + newResult[2]; // adding each result together.
//     console.log("The added amount is:", addedAmount);
//     if (addedAmount === n) {
//       // logic to see if the result is a narcissistic number
//       return console.log("This is a narcissistic number.");
//     } else {
//       return console.log("This is not a narcissistic number.");
//     }
//   }
//   return;
// };

// isNarcissisticNum(370);

/*
TODO:
Amateur challenges
*/

/*
Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish 

example:
Input: start: 1 finish: 4 step: 1 | Output: 10
*/

// const summedSequence = (start, finish, step) => {
//   let result;
//   for (start = 0; start <= finish; step++) {}
// };

/* 
Write a function that takes an array of integers and a target integer, then returns the indices of the two integers that add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
Input: [ 1, 4, 8, 12 ], 20 | Output: [ 2, 3 ]
*/

/*
first loop through the array to find the biggest numbers
add 2 elements together to see if they = the target using multiple if statements
output the indices that = to the target.
*/

const indices = (arr, target) => {
  let sum;
  let indices;
  let string;
  arr.forEach((value, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (value + arr[i] === target) {
        sum = [value, arr[i]];
        indices = [arr.indexOf(sum[0]), arr.indexOf(sum[1])];
        break;
      }
    }
  });
  return indices;
};

const testArr = [1, 4, 8, 12];

console.log(indices(testArr, 20));
