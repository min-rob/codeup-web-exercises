// const fizzBuzz = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     if (i % 15 === 0) {
//       console.log("Fizz Buzz!");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// console.log(fizzBuzz(1, 100));

//find longest word

const findLongestWord = (sentence) => {
  if (typeof sentence != "string") {
    return false;
  }
  let longestWord = "";
  const sentenceArr = sentence.split(" ");
  for (let word of sentenceArr) {
    if (isNaN(parseFloat(sentence)) === false) {
      continue;
    }
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("12344 helloo"));

/*
 * pair students
 *Create a function that randomly pairs students into groups of 2
 * There can be groups of 3 if necessary
 * It should return an array with each pair as a subarray. (a multi-dimensional array)
 */

// const createPairs = (arr) => {
//   let pairs = [[], []];
//   for (let student of arr) {
//     if (arr.length % 2 === 1) {
//       arr.push(pairs[(arr[student], arr[student])]);
//       console.log(pairs);
//     }
//   }
// };

const shuffle = (arr) => {
  let currentIndex = arr.length,
    tempValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
};

const createPairs = (arr) => {
  arr = shuffle(arr);
  let pairs = [];
  while (arr.length > 0) {
    let pair = [];
    let student1 = arr.pop();
    if (arr.length === 0) {
      pairs[pairs.length - 1].push(student1);
    } else {
      pair.push(student1);
      let student2 = arr.pop();
      pair.push(student2);
      pairs.push(pair);
    }
  }
  return pairs;
};

const students = [
  "Amanda",
  "Bianca",
  "Cameron",
  "Chris",
  "Dany",
  "David",
  "Drew",
  "Evan",
  "Hassan",
  "Jack",
  "Jason",
  "John",
  "Jonathan",
  "Jordan",
  "Joshua",
  "Katie",
  "Luis",
];

console.log(createPairs(students));
