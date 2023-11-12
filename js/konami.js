// document.addEventListener("keyup", (event) => console.log(event.key));
const keyPressed = () => {
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowLeft":
                console.log("Pressed Left key");
                const ltKey = document.querySelector("#lt-key");
                ltKey.classList.add("pressed");
                ltKey.setAttribute("src", "/konami/left-key-pressed.png");
                break;
            case "ArrowRight":
                console.log("Pressed right key");
                break;
            case "ArrowUp":
                console.log("Pressed up key");
                break;
            case "ArrowDown":
                console.log("Pressed down key");
                break;
            case "a":
                console.log("Pressed a key");
                break;
            case "b":
                console.log("Pressed b key");
                break;
            case "Enter":
                console.log("Pressed enter key");
                break;
            default:
        }
    });
};

(() => {
    keyPressed();
})();
