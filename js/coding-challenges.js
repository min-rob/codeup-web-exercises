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

const isNarcissisticNum = (n) => {
  //   const lengthOfN = n.length;
  let numString;
  let toArray;
  if (isNaN(n)) {
    //validation to determine if n is a numerical value
    return console.log("Please enter a valid number.");
  } else if (!isNaN(n) && typeof n === "number") {
    // if it is a numerical value and it is a number
    numString = n.toString(); // convert to a string
    console.log("this is a string now", numString);
    let result = "";
    for (let i = 0; i < numString.length; i++) {
      // loop through the string to add a comma between each char.
      result += numString[i];
      if (i < numString.length - 1) {
        result += ",";
      }
    }
    let newResult = [];
    toArray = result.split(",");
    console.log("This is back to an array", toArray); //turning the string into an array by splitting.
    for (let j = 0; j < toArray.length; j++) {
      // looping the array to power each num in the array by the length of the original input
      newResult.push(Math.pow(toArray[j], numString.length));
    }
    console.log("This should return cubed of each number in array", newResult);
    let addedAmount = newResult[0] + newResult[1] + newResult[2]; // adding each result together.
    console.log("The added amount is:", addedAmount);
    if (addedAmount === n) {
      // logic to see if the result is a narcissistic number
      return console.log("This is a narcissistic number.");
    } else {
      return console.log("This is not a narcissistic number.");
    }
  }
  return;
};

isNarcissisticNum(370);
