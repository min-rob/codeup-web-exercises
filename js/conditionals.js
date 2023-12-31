"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

const analyzeColor = (colors) => {
  if (colors.includes("blue")) {
    return `The color ${colors}, reminds me of the ocean!`;
  } else if (colors.includes("red")) {
    return `The color ${colors}, reminds me of a fire!`;
  } else
    colors.includes("cyan") ||
      !colors.includes("red") ||
      !colors.includes("blue");
  {
    return `Sorry! I don't really know anything about ${colors}`;
  }
};

// console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

let color;

switch (randomColor) {
  case "red":
    color = `The color ${randomColor}, reminds me of fire!`;
    break;
  case "blue":
    color = `The color ${randomColor}, reminds me of the sea!`;
    break;
  default:
    color = `I don't know anything about the color ${randomColor}..sorry`;
    break;
}

console.log(color);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// const userColor = prompt("So, what is your favorite color?");
// alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

const randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);

const calculateTotal = (luckyNum, totalAmt) => {
  let discountNum = (luckyNum * 10) / 100;
  let discountedPrice;
  let totalCost;
  let formattedTotal;
  if (luckyNum === 0) {
    formattedTotal = totalAmt.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Unlucky! looks like your lucky number was ${luckyNum}, you don't get any discounts. Your total due is: ${formattedTotal}`
    );
  } else if (luckyNum === 1) {
    discountedPrice = discountNum * totalAmt;
    totalCost = totalAmt - discountedPrice;
    formattedTotal = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Nice! looks like your lucky number was ${luckyNum}, you get ${
        discountNum * 100
      }% off! Your new total is ${formattedTotal}`
    );
  } else if (luckyNum === 2) {
    discountedPrice = (discountNum + 0.05) * totalAmt;
    totalCost = totalAmt - discountedPrice;
    formattedTotal = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Nice! looks like your lucky number was ${luckyNum}, you get ${
        (discountNum + 0.05) * 100
      }% off! Your new total is ${formattedTotal}`
    );
  } else if (luckyNum === 3) {
    discountedPrice = (discountNum + 0.05) * totalAmt;
    totalCost = totalAmt - discountedPrice;
    formattedTotal = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Nice! looks like your lucky number was ${luckyNum}, you get ${
        (discountNum + 0.05) * 100
      }% off! Your new total is ${formattedTotal}`
    );
  } else if (luckyNum === 4) {
    discountedPrice = (discountNum + 0.1) * totalAmt;
    totalCost = totalAmt - discountedPrice;
    formattedTotal = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Nice! looks like your lucky number was ${luckyNum}, you get ${
        (discountNum + 0.1) * 100
      }% off! Your new total is ${formattedTotal}`
    );
  } else if (luckyNum === 5) {
    discountedPrice = (discountNum + 0.5) * totalAmt;
    totalCost = totalAmt - discountedPrice;
    formattedTotal = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    alert(
      `Holy smokes! looks like your lucky number was ${luckyNum}, you get ${
        (discountNum + 0.5) * 100
      }% off! Your new total is ${formattedTotal} ITS FREE!`
    );
  }
};

// calculateTotal(randomNum, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);

calculateTotal(luckyNumber, 100);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// const userQuest = () => {
//   let usersAns = confirm("Would you like to try the number checker?");
//   if (usersAns === true) {
//     let userNum = prompt("Please enter a number to start!");
//     console.log("Users input number", userNum);
//     if (userNum % 2 === 1 || userNum % 2 === -1) {
//       alert("looks like your number is odd!");
//       let plus100 = parseFloat(userNum) + 100;
//       alert(`Your number (${userNum}) + 100 is ${plus100}`);
//       if (userNum > 0) {
//         alert("Your number is also positive!");
//       } else {
//         alert("Your number is negative!");
//       }
//     } else if (userNum % 2 === 0) {
//       alert("looks like your number is even!");
//       let plus100 = parseFloat(userNum) + 100;
//       alert(`Your number (${userNum}) + 100 is ${plus100}`);
//       if (userNum > 0) {
//         alert("Your number is also positive!");
//       } else {
//         alert("Your number is negative!");
//       }
//     }
//   } else {
//     alert("Ok, have a good day!");
//   }
// };

const userQuest = () => {
  let userAns = confirm(
    "Would you like to try the all knowing number checker?"
  );
  if (userAns === true) {
    let userNum = prompt("Please enter a number to start!");
    const floatUserNum = parseFloat(userNum);
    console.log(floatUserNum);
    if (userNum.length !== 0 && floatUserNum === isNaN) {
      console.log(typeof userNum);
      if (floatUserNum % 2 === 1 || floatUserNum % 2 === -1) {
        alert("Looks like your number is odd!");
        let plus100 = floatUserNum + 100;
        alert(`Your number ${floatUserNum} + 100 is ${plus100}`);
        if (floatUserNum > 0) {
          alert("Your number is also positive!");
        } else {
          alert("Your number is negative!");
        }
      } else if (floatUserNum % 2 === 0) {
        alert("Looks like your number is even!");
        let plus100 = floatUserNum + 100;
        alert(`Your number ${floatUserNum} + 100 is ${plus100}`);
        if (floatUserNum > 0) {
          alert("Your number is also positive!");
        } else {
          alert("Your number is also negative!");
        }
      }
    } else {
      alert(
        "Uh oh! Looks like you forgot to enter something, or you didn't put a number."
      );
      return;
    }
  } else {
    alert("Alright, try it next time!");
    return;
  }
};

userQuest();
