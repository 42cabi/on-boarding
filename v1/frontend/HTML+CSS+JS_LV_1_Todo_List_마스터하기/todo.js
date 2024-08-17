/* values */
const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

const showAllBtn = document.getElementById("show-all");
const showTodoBtn = document.getElementById("show-todo");
const showDoneBtn = document.getElementById("show-done");

const TODO_OBJ_KEY = "todoObj";
let todoObjs = [];


/* render from localstorage */
const saveTodoObjs = localStorage.getItem(TODO_OBJ_KEY);
if (saveTodoObjs) {
  let parsedObjs = JSON.parse(saveTodoObjs);
  todoObjs = parsedObjs;
  parsedObjs.forEach(createNewTodo);
}

/* event listener for buttons */
inputText.addEventListener("keydown", handleInputText);
inputBtn.addEventListener("click", handleInputText);
showAllBtn.addEventListener("click", handleShowAll);
showTodoBtn.addEventListener("click", handleShowTodo);
showDoneBtn.addEventListener("click", handleShowDone);


/** function */
/* save to localstorage */
function saveToLocal() {
  localStorage.setItem(TODO_OBJ_KEY, JSON.stringify(todoObjs));
}

/* create todo list for html: li ( button, button, span ) */
function createNewTodo(newTodo) {
  const newList = document.createElement("li");
  newList.id = newTodo.id;
  newList.className = "flex-row";

  const todoText = document.createElement("span");
  todoText.innerText = newTodo.text;

  const doneBtn = document.createElement("button");
  if (newTodo.completed) {
    todoText.classList.toggle("completed");
    doneBtn.className = "done-btn";
  } else {
    doneBtn.className = "todo-btn";
  }
  doneBtn.addEventListener("click", () => {
    todoText.classList.toggle("completed");
    if (todoText.classList.contains("completed")) {
      doneBtn.className = "done-btn";
      newTodo.completed = true;
    } else {
      doneBtn.className = "todo-btn";
      newTodo.completed = false;
    }
    saveToLocal();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "trash-btn";
  deleteBtn. addEventListener("click", () => {
    // newList.parentNode.removeChild(newList);
    newList.remove();
    todoObjs = todoObjs.filter((todo) => todo.id !== parseInt(newList.id))
    saveToLocal();
  });

  newList.appendChild(doneBtn);
  newList.appendChild(deleteBtn);
  newList.appendChild(todoText);
  todoList.appendChild(newList);
}

/* handling for events */
function handleInputText(e) {
  if (e.isComposing) return;
  if (e.key === "Enter" || e.type === "click") {
    let inputValue = inputText.value;
    inputText.value = "";

    if (!inputValue) {
      alert("It's empty!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    todoObjs.push(newTodo);
    createNewTodo(newTodo);
    saveToLocal();
  }
}

function handleShowAll() {
  todoList.innerHTML = "";
  todoObjs.forEach(createNewTodo);
}

function handleShowTodo() {
  todoList.innerHTML = "";
  todoObjs.filter(todo => !todo.completed).forEach(createNewTodo);
}

function handleShowDone() {
  todoList.innerHTML = "";
  todoObjs.filter(todo => todo.completed).forEach(createNewTodo);
}
