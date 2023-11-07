(() => {
  const headerRow = document.querySelector("header.container .row"); // selecting header container that contains a row
  console.log(headerRow.innerHTML);
  console.log(headerRow.innerText);

  const heroH1 = document.querySelector(".container.hero h1");
  const heroH1Id = heroH1.getAttribute("id");
  console.log(`Hero H1 ID => ${heroH1Id}`);
  heroH1.setAttribute("id", "Cat-poop-coffee");

  //Class manipulation
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
    } else {
      mobileMenu.classList.add("open");
    }
  });

  //Changing an attribute content
  //   const heroImg = document.querySelector(".hero img");

  //   setTimeout(() => {
  //     heroImg.setAttribute("src", "./img/puppy-photo.jpg");
  //   }, 5000);
})();
