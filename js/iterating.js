const first = (array) => {
  return console.log(array[0]);
};
const second = (array) => {
  return console.log(array[1]);
};
const last = (array) => {
  return console.log(array[array.length - 1]);
};

(function () {
  "use strict";

  /**
   * TODO:
   * Create an array of 4 people's names and store it in a variable called
   * 'names'.
   */
  const names = ["John", "Mike", "Dan", "Holly"];

  /**
   * TODO:
   * Create a log statement that will log the number of elements in the names
   * array.
   */

  console.log(`number of elements in the array: ${names.length}`);

  /**
   * TODO:
   * Create log statements that will print each of the names individually by
   * accessing each element's index.
   */

  console.log(names[0], names[1], names[2], names[3]);

  /**
   * TODO:
   * Write some code that uses a for loop to log every item in the names
   * array.
   */

  for (let i = 0; i < names.length; i++) {
    console.log(`All the names: ${names[i]}`);
  }

  /**
   * TODO:
   * Refactor your above code to use a `forEach` loop
   */

  names.forEach((name) => {
    console.log("this", name);
  });

  /**
   * TODO:
   * Create the following three functions, each will accept an array and
   * return an an element from it
   * - first: returns the first item in the array
   * - second: returns the second item in the array
   * - last: returns the last item in the array
   *
   * Example:
   *  > first([1, 2, 3, 4, 5]) // returns 1
   *  > second([1, 2, 3, 4, 5]) // returns 2
   *  > last([1, 2, 3, 4, 5]) // return 5
   */

  first([1, 2, 3, 4, 5]);
  second([1, 2, 3, 4, 5]);
  last([1, 2, 3, 4, 5]);
})();

//IIFE (Immediate Invoke Function Expression)

/*
(()=>{
    //Start here
}
)()
*/
