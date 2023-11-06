(() => {
  //querySelector used to grab the node, can only grab 1 selector, by naming the css selector.
  const pageHeader = document.querySelector(".page-wrapper");
  //removing nodes from the dom
  pageHeader.remove();
  //adding classes to a dom
  pageHeader.classList.add("red");
  //selecting all, always returns an array
  document.querySelectorAll();
  //iterating through a selectorAll
  const h3Arr = document.querySelectorAll("h1");
  for (let h3 of h3Arr) {
    h3.style.color = "purple";
  }
})();
