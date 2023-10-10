const checkLoop = (addOne) => {
  for (let i = 0; addOne > 0; i++) {
    if (addOne > 0) {
      return addOne + 1;
    } else {
      return "yeahh... no";
    }
  }
  return;
};

console.log(checkLoop());
