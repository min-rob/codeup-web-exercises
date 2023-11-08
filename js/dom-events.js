(() => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.addEventListener("click", () => {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("show");
    });
    //mouse events
    const sayHelloBtn = document.querySelector("#hello");
    sayHelloBtn.addEventListener("click", (e) => {
        const name = e.target.getAttribute("data-name");
        alert(`Hello ${name}!`);
    });

    //keyboard events
    document.body.addEventListener("keydown", (e) => {
        if (e.key === ".") {
            alert("You pressed the period key");
        }
        console.log(e.key);
    });
})();
