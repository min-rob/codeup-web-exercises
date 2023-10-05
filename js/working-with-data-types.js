/*
Exercise #1 
*/
let a = 1;
console.log(a);

let b = a++;
console.log(b);

let c = ++a;
console.log(c);

// results for a = 1, b = 1, c = 3

let d = "Hello";
let e = false;
d++;
e++;
console.log(d, e);
// results for d = NaN, results for e = 1;

let perplexed;
console.log(perplexed + 2);
//results is NaN adding 2 to a undefined is still undefined.

let price = 2.7;
let nextPrice = price.toFixed(2);
console.log(nextPrice);
// adding the param of 2 in to the method of toFixed is creating 2 places after the decimal, so the result will be 2.70

// let strPrice = "2.7";
// let nextStrPrice = strPrice.toFixed(2);
// console.log(nextStrPrice);
// you will return an error because you can't use toFixed to a string it's a number method.

/* 
Exercise #2
*/

let sample = "Hello Codeup";
let sampleLength = sample.length;
console.log("The total length is: ", sampleLength);

let sampleUppercase = sample.toUpperCase();
console.log("All uppercase: ", sampleUppercase);

sample += " Students";
console.log(`Reassigned sample is: ${sample}`);

sample = sample.replace("Students", "Class");
console.log(`Replacing Students with Class ${sample}`);

let newSampleLength = sample.length;
console.log("The new length is: ", newSampleLength);

let indexStartSample = sample.indexOf("C");
console.log('The start of "C"', indexStartSample);

let indexCodeup = sample.indexOf("p");
console.log('The index of the "p" is:', indexCodeup);

let subSample = sample.substring(indexStartSample, indexCodeup + 1);
console.log("the result of the substring is: ", subSample);

/* 
Exercise #3
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), 
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?


Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

let movies = [
  ["The Little Mermaid", 3],
  ["Brother Bear", 5],
  ["Hercules", 1],
];
let pricePerDay = 3;
console.log(movies[0][1]);

let totalPrice = movies[0][1] * 3 + movies[1][1] * 3 + movies[2][1] * 3;
console.log("The total cost of movies is: ", totalPrice);

/* --------------------------------------------------------- */
let movie1 = 3;
let movie2 = 5;
let movie3 = 1;

let dailyPrice = 3;

let totalMoviePrice =
  movie1 * dailyPrice + movie2 * dailyPrice + movie3 * dailyPrice;
console.log("The total movie price is:", totalMoviePrice);

/* --------------------------------------------------------- */

let contractors = [
  ["Google", 400],
  ["Amazon", 300],
  ["Facebook", 350],
];

let hours = [
  ["Google", 6],
  ["Amazon", 4],
  ["Facebook", 10],
];

let totalPayCheck =
  contractors[0][1] * hours[0][1] +
  contractors[1][1] * hours[1][1] +
  contractors[2][1] * hours[2][1];
console.log("The total amount you get paid this week is: ", totalPayCheck);

/* 
Exercise # 4
Use the following code to follow the instructions below:

let username = 'codeup';
let password = 'notastrongpassword';
Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
*/

let username = "codeup";
let password = "notastrongpassword";
let pwCharLength = 5;
let usernameCharLength = 20;

let passwordCharCheck = password.length >= pwCharLength;
let usernameCharCheck = username.length <= usernameCharLength;
let pwCheck = password !== username;
let noWhiteSpace = password.includes(" ") && username.includes(" ");

console.log("Password Char check", passwordCharCheck);
console.log("Username Char check", usernameCharCheck);
console.log("PW not = Username check", pwCheck);
console.log("Password Char check", noWhiteSpace);

const handlePasswordCheck = (password) => {
  let result;
  // validate parameters
  if (!password || typeof password !== "string") {
    return "you dun messed up a-aron";
  }
  // do the thangs
  if (password.length < pwCharLength) {
    result = "Your password does not meet the char requirements";
  } else if (password === username) {
    result = "Your password cannot be the same as your username.";
  } else if (password.includes(" ")) {
    result = "Your password cannot include spaces before or after.";
  } else {
    result = "Your password passes all the requirements.";
  }
  return result;
};

console.log(handlePasswordCheck(password));

const handleUsernameCheck = (username) => {
  let result;
  if (!username || typeof username !== "string") {
    return "Your username isn't a string";
  }
  if (username.length > usernameCharLength) {
    result = "Your username cannot be longer than 20 char's";
  } else if (username.includes(" ")) {
    result = "Your username cannot contain any white space.";
  } else {
    result = "Your username passes all the requirements";
  }
  return result;
};

console.log(handleUsernameCheck(username));
