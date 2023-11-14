(() => {
    const addBtn = document.querySelector("#addBox");
    addBtn.addEventListener("click", (e) => {
        const createBox = document.createElement("div");
        //adding a class to the new element
        createBox.classList.add("box");
        //select where you want to put on the dom
        const boxContainer = document.querySelector("#boxes");
        //adding a number increment to each box
        createBox.innerHTML = `
        <span>${document.querySelectorAll(".box").length + 1}</span>`;
        createBox.addEventListener("click", (e) => {
            createBox.remove();
        });
        //add the node to the parent
        boxContainer.appendChild(createBox);
    });
})();
