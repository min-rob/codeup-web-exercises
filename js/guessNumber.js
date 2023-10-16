const randNumber = Math.floor(Math.random() * 100) + 1;

const guessNumber = () => {
  let targetNum = randNumber;
  let attempts = 0;
  let maxAttempts = 10;
  let userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
  attempts++;
  console.log(`num of attempts ${attempts}, max left ${maxAttempts}`);
  console.log(userGuess);
  if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
    alert("Please enter a valid number.");
    guessNumber();
  } else if (userGuess !== targetNum) {
    for (let i = 0; i <= maxAttempts; attempts++) {
      console.log(attempts);
      alert("That is incorrect, please try again.");
      userGuess = prompt(
        `You have tried ${attempts} time(s). Max number of attempts is ${maxAttempts}. Please guess again!`
      );
      if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        alert("Please enter a valid number.");
      }

      if (attempts >= 5) {
        const hint =
          userGuess < randNumber ? "Try a higher number" : "Try a lower number";
        alert(`That is incorrect, please try again \n(${hint})`);
      }
      if (attempts === maxAttempts) {
        alert(
          `The number was ${targetNum}. You've exceeded the number of attempts! Please try again later.`
        );
        break;
      } else if (userGuess === targetNum) {
        alert("You guessed the correct answer!");
        break;
      }
    }
  } else {
    attempts++;
    alert(
      `Great job! The number was ${targetNum} and you've guessed ${userGuess} with only ${attempts}!`
    );
  }
};

guessNumber();
