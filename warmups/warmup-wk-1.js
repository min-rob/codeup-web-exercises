const fizzBuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz!");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(1, 100));
