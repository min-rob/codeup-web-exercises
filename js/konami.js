// document.addEventListener("keyup", (event) => console.log(event.key));
const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter",
];
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
                const rtKey = document.querySelector("#rt-key");
                rtKey.classList.add("pressed");
                rtKey.setAttribute("src", "/konami/right-key-pressed.png");
                break;
            case "ArrowUp":
                console.log("Pressed up key");
                const upKey = document.querySelector("#up-key");
                upKey.classList.add("pressed");
                upKey.setAttribute("src", "/konami/up-key-pressed.png");
                break;
            case "ArrowDown":
                console.log("Pressed down key");
                const dwnKey = document.querySelector("#dwn-key");
                dwnKey.classList.add("pressed");
                dwnKey.setAttribute("src", "/konami/down-key-pressed.png");
                break;
            case "a":
                console.log("Pressed a key");
                const aKey = document.querySelector("#a-key");
                aKey.classList.add("pressed");
                aKey.setAttribute("src", "/konami/a-key-pressed.png");
                break;
            case "b":
                console.log("Pressed b key");
                const bKey = document.querySelector("#b-key");
                bKey.classList.add("pressed");
                bKey.setAttribute("src", "/konami/b-key-pressed.png");
                break;
            case "Enter":
                console.log("Pressed enter key");
                const enterKey = document.querySelector("#enter-key");
                enterKey.classList.add("pressed");
                enterKey.setAttribute("src", "/konami/enter-key-pressed.png");
                break;
            default:
        }
    });
};
const keyRelease = () => {
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowLeft":
                const ltKey = document.querySelector("#lt-key");
                setTimeout(() => {
                    ltKey.classList.remove("pressed");
                    ltKey.setAttribute("src", "/konami/left-key.png");
                }, 200);
                break;
            case "ArrowRight":
                const rtKey = document.querySelector("#rt-key");
                setTimeout(() => {
                    rtKey.classList.remove("pressed");
                    rtKey.setAttribute("src", "/konami/right-key.png");
                }, 200);
                break;
            case "ArrowUp":
                const upKey = document.querySelector("#up-key");
                setTimeout(() => {
                    upKey.classList.remove("pressed");
                    upKey.setAttribute("src", "/konami/up-key.png");
                }, 200);
                break;
            case "ArrowDown":
                const dwnKey = document.querySelector("#dwn-key");
                setTimeout(() => {
                    dwnKey.classList.remove("pressed");
                    dwnKey.setAttribute("src", "/konami/down-key.png");
                }, 200);
                break;
            case "a":
                const aKey = document.querySelector("#a-key");
                setTimeout(() => {
                    aKey.classList.remove("pressed");
                    aKey.setAttribute("src", "/konami/a-key.png");
                }, 200);
                break;
            case "b":
                const bKey = document.querySelector("#b-key");
                setTimeout(() => {
                    bKey.classList.remove("pressed");
                    bKey.setAttribute("src", "/konami/b-key.png");
                }, 200);
                break;
            case "Enter":
                const enterKey = document.querySelector("#enter-key");
                setTimeout(() => {
                    enterKey.classList.remove("pressed");
                    enterKey.setAttribute("src", "/konami/enter-key.png");
                }, 200);
                break;
            default:
        }
    });
};

const userInputDisplay = () => {
    //make it do on every key press event.
    //use createElement to create a new li
    //use createElement to create a new img tag
    //use setAttribute of the img tag to src="/konami/left-icon.png"
    document.addEventListener("keydown", (e) => {
        const inputList = document.querySelector(".user-input-list");
        switch (e.key) {
            case "ArrowLeft":
                const ltList = document.createElement("li");
                ltList.classList.add("icon-pressed");
                const ltImg = document.createElement("img");
                ltImg.src = "/konami/left-icon.png";
                ltImg.alt = "left-icon";
                ltList.appendChild(ltImg);
                inputList.appendChild(ltList);
                break;
            case "ArrowRight":
                const rtList = document.createElement("li");
                rtList.classList.add("icon-pressed");
                const rtImg = document.createElement("img");
                rtImg.src = "/konami/right-icon.png";
                rtImg.alt = "right-icon";
                rtList.appendChild(rtImg);
                inputList.appendChild(rtList);
                break;
            case "ArrowUp":
                const upList = document.createElement("li");
                upList.classList.add("icon-pressed");
                const upImg = document.createElement("img");
                upImg.src = "/konami/up-icon.png";
                upImg.alt = "up-icon";
                upList.appendChild(upImg);
                inputList.appendChild(upList);
                break;
            case "ArrowDown":
                const dwnList = document.createElement("li");
                dwnList.classList.add("icon-pressed");
                const dwnImg = document.createElement("img");
                dwnImg.src = "/konami/down-icon.png";
                dwnImg.alt = "dwn-icon";
                dwnList.appendChild(dwnImg);
                inputList.appendChild(dwnList);
                break;
            case "a":
                const aList = document.createElement("li");
                aList.classList.add("icon-pressed");
                const aImg = document.createElement("img");
                aImg.src = "/konami/A.png";
                aImg.alt = "a-icon";
                aList.appendChild(aImg);
                inputList.appendChild(aList);
                break;
            case "b":
                const bList = document.createElement("li");
                bList.classList.add("icon-pressed");
                const bImg = document.createElement("img");
                bImg.src = "/konami/B.png";
                bImg.alt = "b-icon";
                bList.appendChild(bImg);
                inputList.appendChild(bList);
                break;
            case "Enter":
                const enterList = document.createElement("li");
                enterList.classList.add("icon-pressed");
                const enterImg = document.createElement("img");
                enterImg.src = "/konami/enter.png";
                enterImg.alt = "enter-icon";
                enterList.appendChild(enterImg);
                inputList.appendChild(enterList);
                break;
            default:
        }
    });
};

const cheatSuccessHandler = (code) => {
    let userInput = [];
    document.addEventListener("keydown", (e) => {
        userInput.push(e.key);
    });
    const enterHandler = (event) => {
        if (event.key === "Enter") {
            for (let i = 0; i < konamiCode.length; i++) {
                if (konamiCode.length !== userInput.length) {
                    return alert("Incorrect code!");
                } else {
                    return alert("Konami code activated!");
                }
            }
        } else {
            return;
        }
    };
    document.addEventListener("keydown", enterHandler);
};

(() => {
    keyPressed();
    keyRelease();
    userInputDisplay();
    cheatSuccessHandler(konamiCode);
})();
