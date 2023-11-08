/*
Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
Four seconds after the page loads, use innerHTML to change the name in "profile-name".
Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
Use setTimout to create these behaviors.
Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
*/

const onClickHandler = () => {
  const profileCard = document.querySelector("#profile-card");
  profileCard.classList.toggle("new-background");
  console.log("clicked");
};
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

(() => {
  const profilePic = document.querySelector("#profile-pic");

  setTimeout(() => {
    profilePic.setAttribute("src", "../img/img-1.jpg");
  }, 2000);

  const profileName = document.querySelector("#profile-name");
  setTimeout(() => {
    profileName.innerHTML = "<h2>Luke Skywalker</h2>";
  }, 4000);

  const profileDesc = document.querySelector("#profile-desc");
  setTimeout(() => {
    profileDesc.classList.add("new-font");
    const newFont = document.querySelector(".new-font");
  }, 6000);

  //   const profileCard = document.querySelector("#profile-card");
  //   setInterval(() => {
  //     profileCard.classList.toggle("new-background");
  //   }, 2000);

  //create an array of colors

  setInterval(() => {
    const profileCard = document.querySelector("#profile-card");
    const randomIndex = Math.floor(Math.random() * colors.length);
    profileCard.style.backgroundColor = colors[randomIndex];
  }, 2000);
})();
