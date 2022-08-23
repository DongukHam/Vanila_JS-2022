const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

const toDos = []

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event){
    // const li = event.target.parentElement;
    // li.remove();
    toDoList.removeChild(event.target.parentElement);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText= "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDdSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDdSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("This is the turn of ", item));
}