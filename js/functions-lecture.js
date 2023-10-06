function isCoding() {
  console.log("I love coding!");
}

isCoding();

function loveCoding(usersFullName) {
  console.log(`Hello! ${usersFullName}, loves coding!`);
}

loveCoding("Rob O");

const globalVar = "I am a global variable";

const tieFighter = () => {
  const localVar = "I am a local variable";
  console.log(globalVar);
  console.log(localVar);
};

tieFighter();
