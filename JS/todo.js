const todoForm = document.querySelector("#Todo-Form");
const todoInput = document.querySelector("#Todo-Form input");
const todoList = document.querySelector("#Todo-List");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
const Li = event.target.parentElement;
Li.remove();
toDos= toDos.filter((toDo) => toDo.id !== parseInt(Li.id));
saveToDos();
}


function paintToDo(newTodo){
 const Li = document.createElement("Li");
Li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo.text;
 const button = document.createElement("button");
   button.innerText = "x";
   button.addEventListener("click", deleteToDo);
 Li.appendChild(span);
 Li.appendChild(button);
 todoList.appendChild(Li);
}


function handleToDoSubmit(event){
event.preventDefault();
const newTodo = todoInput.value;
todoInput.value = "";
const newTodoObj = {
   text: newTodo,
   id: Date.now()
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
const parsedToDos = JSON.parse(savedToDos);
toDos = parsedToDos;
parsedToDos.forEach(paintToDo);   
}

