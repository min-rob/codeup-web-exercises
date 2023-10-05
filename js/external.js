// console.log("Hello from external javascript!");
/*
Use the alert function to show a message that says 'Welcome to my Website!'.

Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

For example, if the user enters "blue", your code should alert a message that says:

"Great, blue is my favorite color too!"

Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
Finally, commit the changes to your git repository, and push to GitHub.
*/

// alert("Welcome to my website!");

// let userAnswer = prompt("Please enter your favorite color!");

// alert(`Great! ${userAnswer} is my favorite color too!`);

/*
Exercise #3

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
*/

// alert("Please enter 3 movies you would like to check out.");
// let movieTitle1 = prompt("Enter a title for your first movie.");
// let movieRentDays1 = prompt(
//   `Please enter the number of days you would like to rent ${movieTitle1} for.`
// );
// let movieRentAns1 = confirm(
//   `You will be renting ${movieTitle1} for ${movieRentDays1} days, is this correct?`
// );
// console.log(
//   `User has selected ${movieRentAns1} user has confirmed the selection for the first movie.`
// );
// let movieTitle2 = prompt("Please enter a title for your second movie.");
// let movieRentDays2 = prompt(
//   `Please enter the number of days you would like to rent ${movieTitle2} for.`
// );
// let movieRentAns2 = confirm(
//   `You will be renting ${movieTitle2} for ${movieRentDays2} days, is this correct?`
// );
// let movieTitle3 = prompt("Please enter a title for your third movie.");
// let movieRentDays3 = prompt(
//   `Please enter the number of days you would like to rent ${movieTitle3} for.`
// );
// let movieRentAns3 = confirm(
//   `You will be renting ${movieTitle3} for ${movieRentDays3} days, is this correct?`
// );

// let pricePerDay = 3;
// let priceForMovie1 = movieRentDays1 * pricePerDay;
// let priceForMovie2 = movieRentDays2 * pricePerDay;
// let priceForMovie3 = movieRentDays3 * pricePerDay;
// let totalPrice = priceForMovie1 + priceForMovie2 + priceForMovie3;

// alert(`You have selected the following:
// ${movieTitle1} for ${movieRentDays1} days, costing: $${priceForMovie1}.
// ${movieTitle2} for ${movieRentDays2} days, costing: $${priceForMovie2}.
// ${movieTitle3} for ${movieRentDays3} days, costing: $${priceForMovie3}.
// your total is: $${totalPrice}.
// `);

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/
let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

alert("You will be getting paid $400 an hour for Google.");
let hoursWorkedGoogle = prompt(
  "How many hours did you work at Google this week?"
);
let googleConfirm = confirm(`Is ${hoursWorkedGoogle} hours, correct?`);
let totalGooglePay = hoursWorkedGoogle * googlePay;
let formatGooglePay = totalGooglePay.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

for (let i = 0; i < 10; i++) {
  if (googleConfirm == false) {
    hoursWorkedGoogle = prompt(
      `Please enter the number of hours you worked this week.`
    );
    googleConfirm = confirm(`is ${hoursWorkedGoogle} hours, correct?`);
  } else if (googleConfirm == true) {
    alert(
      `The total amount you earned working for Google this week is: ${formatGooglePay}`
    );
    {
      break;
    }
  } else {
    alert(
      `The total amount you earned working for Google this week is: $${formatGooglePay}`
    );
  }
}

alert("You will be getting paid $380 an hour for Amazon.");
let hoursWorkedAmazon = prompt(
  "How many hours did you work at Amazon this week?"
);
let amazonConfirm = confirm(`Is ${hoursWorkedAmazon} hours, correct?`);
let totalAmazonPay = hoursWorkedAmazon * amazonPay;
let formatAmazonPay = totalAmazonPay.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

for (let j = 0; j < 10; j++) {
  if (amazonConfirm == false) {
    hoursWorkedAmazon = prompt(
      "How many hours did you work at Amazon this week?"
    );
    amazonConfirm = confirm(`Is ${hoursWorkedAmazon} hours, correct?`);
  } else if (amazonConfirm == true) {
    alert(
      `The total amount you earned working for Amazon this week is: ${formatAmazonPay}`
    );
    {
      break;
    }
  } else {
    alert(
      `The total amount you earned working for Amazon this week is: ${formatAmazonPay}`
    );
  }
}

alert(`You will be getting paid $${facebookPay} an hour from Facebook.`);
let hoursWorkedFacebook = prompt(
  "How many hours did you work for Facebook this week?"
);
let facebookConfirm = confirm(`Is ${hoursWorkedFacebook} hours, correct?`);
let totalFacebookPay = facebookPay * hoursWorkedFacebook;
let formatFacebookPay = totalFacebookPay.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

for (k = 0; k < 10; k++) {
  if (facebookConfirm == false) {
    hoursWorkedFacebook = prompt(
      "How many hours did you work at Facebook this week?"
    );
    facebookConfirm = confirm(`Is ${hoursWorkedFacebook} hours, correct?`);
  } else if (facebookConfirm == true) {
    alert(
      `The total amount you have earned from Facebook this week is ${formatFacebookPay}.`
    );
    {
      break;
    }
  } else {
    alert(
      `The total amount you have earned from Facebook this week is ${formatFacebookPay}.`
    );
  }
}
let totalIncome = totalAmazonPay + totalGooglePay + totalFacebookPay;
let formattedIncome = totalIncome.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
alert(`Your total earnings this week is ${formattedIncome}!`);
