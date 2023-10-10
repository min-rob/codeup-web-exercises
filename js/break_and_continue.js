/*Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered. */

const breakTest = () => {
  let userNum;
  while (true) {
    userNum = parseFloat(prompt("Please enter an odd number between 1 - 50"));
    if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
      break;
    } else {
      alert("Invalid input.");
    }
  }

  for (let i = 1; i <= 50; i++) {
    if (i === userNum) {
      console.log("skipping your number");
      continue;
    }
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

breakTest();
