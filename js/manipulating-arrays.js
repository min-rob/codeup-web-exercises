(() => {
  const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

  daysOfTheWeek.push("Friday");
  console.log(daysOfTheWeek);
  daysOfTheWeek.unshift("Sunday");
  console.log(daysOfTheWeek);

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "red",
  ];

  let index = colors.indexOf("green");
  console.log(index);

  const allRedValues = colors.filter((color) => {
    return color === "red";
  });
  console.log(allRedValues);
})();
