const handleButtons = (e) => {
    const btnId = e.target.getAttribute("data-bid");
    if (btnId === "1") {
        console.log("button is being pressed");
        const subParagraphs = document.querySelectorAll(".sub-paragraph");
        subParagraphs.item(0).innerText = "Mission Accomplished!";
    }
    if (btnId === "2") {
        const mainHeader = document.querySelector("#main-header");
        mainHeader.innerText = "JavaScript is Cool";
    }
    if (btnId === "3") {
        const listItems = document.querySelectorAll("li");
        for (let li of listItems) {
            if (li.dataset.dbid % 2 === 0) {
                li.style.color = "grey";
            }
        }
    }
    if (btnId === "4") {
        const listItems = document.querySelectorAll("li");
        for (let li of listItems) {
            console.log(li.dataset.dbid);
            if (li.dataset.dbid === "1") {
                li.style.color = "blue";
            }
        }
    }
};

/*
 * Use the file dom-query-js.html for these exercises. Commit your changes to GitHub.

Remove your custom event listener code from previous exercises.

Add code that will change the background color of an h1 element when clicked.

Make all paragraphs have a font size of 18px when they are double clicked.

Set all li text color to red when the mouse is hovering; reset to black when it is not.
 */

const handleParagraphClick = () => {
    const paragraphs = document.querySelectorAll("p");
    for (let paragraph of paragraphs) {
        paragraph.style.fontSize = "18px";
    }
};

(() => {
    const mainHead = document.querySelector("#main-header");
    mainHead.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "green";
    });
    const paragraphs = document.querySelectorAll("p");
    // paragraph.addEventListener("dblclick", (e) => {
    //     e.target.style.fontSize = "18px";
    // });
    for (let paragraph of paragraphs) {
        paragraph.addEventListener("dblclick", handleParagraphClick);
    }
    const listItems = document.querySelectorAll("li");
    for (let listItem of listItems) {
        listItem.addEventListener("mouseenter", (e) => {
            e.target.style.color = "red";
        });
        listItem.addEventListener("mouseleave", (e) => {
            e.target.style.color = "black";
        });
    }

    // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
    const opBtns = document.querySelectorAll(".btn-op");
    for (let opBtn of opBtns) {
        opBtn.addEventListener("click", handleButtons);
    }

    // const myForm = document.querySelector("#my-form");
    // myForm.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(myForm);
    //     console.log(formData.get("name"));
    //     console.log(formData.get("email"));
    //     console.log(formData.get("message"));
    // });
})();
