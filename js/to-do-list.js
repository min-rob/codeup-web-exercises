/**
 *  <li class="to-do-item list-group-item d-flex justify-content-between align-items-center">
    <p class="m-0">Finish this exercise</p>
    <button class="btn btn-danger">Done</button>
    </li>
 */

const todoListHandler = () => {
    const todo = document.createElement("li");
    const doneBtnLength = document.querySelectorAll(".btn-danger").length;
    const todoInput = document.querySelector("#to-do").value;
    if (todoInput === "") {
        alert("Input field cannot be blank");
        return;
    }
    todo.classList.add(
        "to-do-item",
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );
    todo.innerHTML = `
        <p class="m-0">${todoInput}</p>
    <button class="btn btn-danger" id="done${doneBtnLength}">Done</button>
    `;
    document.querySelector("#to-do-list").append(todo);
    const todoLength = document.querySelectorAll(".to-do-item").length;
    if (todoLength > 10) {
        alert("You can only add 10 items");
        todo.remove();
        return;
    }

    const doneBtn = document.querySelector(`#done${doneBtnLength}`);

    const removeListHandler = (event) => {
        doneBtn.parentElement.remove();
    };

    doneBtn.addEventListener("click", removeListHandler);
};

//Main
(() => {
    const addTodoBtn = document.querySelector("#addToDo");
    addTodoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoListHandler();
    });
})();
