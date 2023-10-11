/* Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)¸ */

const showMultiplicationTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
};

// showMultiplicationTable(7);

/* Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example: */

const randomNumGenerate = () => {
  let result;
  for (let i = 0; i <= 10; i++) {
    let theNum = Math.floor(Math.random() * (200 - 20) + 20);
    if (theNum % 2 === 0) {
      console.log(`${theNum} is even.`);
    } else {
      console.log(`${theNum} is odd.`);
    }
  }
};

// randomNumGenerate();

/* Create a for loop that uses console.log to create the output shown below.

 */

const numTree = () => {
  let result = "";
  for (i = 0; i < 10; i++) {
    for (j = 0; j <= i; j++) {
      result += i;
    }
    result += "\n";
  }
  console.log(result);
};

numTree();

/*Create a for loop that uses console.log to create the output shown below.*/

for (let i = 100; i >= 5; i -= 5) {
  console.log(i);
}
