const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form__input");
const toDoBtn = document.querySelector("#todo-form__btn");

let toDos = [];

const init = () => {
  const savedToDos = localStorage.getItem("toDos");
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    if (parsedToDos.length > 0) {
      toDos = parsedToDos;
      toDos.forEach((todo) => printTodo(todo));
    }
  }
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  if (toDoInput.value === "") {
    alert("할 일을 입력해주세요.");
    return;
  }
  const toDo = {
    id: Date.now(),
    memo: toDoInput.value,
    isDone: false,
  };
  toDoInput.value = "";
  toDos.push(toDo);
  printTodo(toDo);
  const obj = JSON.stringify(toDos);
  localStorage.setItem("toDos", obj);
};

toDoForm.addEventListener("submit", handleTodoSubmit);

const deleteTodo = (event) => {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id != li.id);
  const obj = JSON.stringify(toDos);
  localStorage.setItem("toDos", obj);
};

const checkTodo = (event) => {
  const li = event.target.parentElement.parentElement;
  toDos = toDos.map((todo) => {
    if (todo.id == li.id) {
      return { ...todo, isDone: event.target.checked };
    }
    return todo;
  });
  const obj = JSON.stringify(toDos);
  localStorage.setItem("toDos", obj);

  const memo = li.querySelector("#todo-list__item-text");
  if (event.target.checked) {
    memo.className = "todo-list__item-text-checked";
  } else {
    memo.className = "todo-list__item-text-unchecked";
  }
};

const shortenInput = (input) => {
  if (input.length > 40) {
    return input.slice(0, 40) + "...";
  } else {
    return input;
  }
};

const printTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const memo = document.createElement("div");
  const button = document.createElement("button");
  const input = document.createElement("input");
  if (todo.isDone) {
    memo.className = "todo-list__item-text-checked";
    input.checked = true;
  } else {
    memo.className = "todo-list__item-text-unchecked";
    input.checked = false;
  }
  li.id = todo.id;
  li.className = "todo-list__item";
  memo.innerText = shortenInput(todo.memo);
  memo.id = "todo-list__item-text";
  button.innerText = "삭제";
  button.addEventListener("click", deleteTodo);
  button.className = "todo-list__item-btn";
  input.type = "checkbox";
  input.className = "todo-list__item-checkbox";
  input.addEventListener("change", checkTodo);
  div.appendChild(button);
  div.appendChild(input);
  li.appendChild(memo);
  li.appendChild(div);
  toDoList.appendChild(li);
};

const handleCategoryClick = (event) => {
  event.preventDefault();
  const category = event.target.innerText;
  switch (category) {
    case "모두":
      toDoList.innerHTML = "";
      toDos.forEach((todo) => printTodo(todo));
      break;
    case "미완료":
      toDoList.innerHTML = "";
      toDos.forEach((todo) => {
        if (!todo.isDone) {
          printTodo(todo);
        }
      });
      break;
    case "완료":
      toDoList.innerHTML = "";
      toDos.forEach((todo) => {
        if (todo.isDone) {
          printTodo(todo);
        }
      });
      break;
  }
};

// 디바운싱 넣으면 좋겠다
const handleSearch = (event) => {
  event.preventDefault();
  const keyword = event.target.value;
  toDoList.innerHTML = "";
  if (keyword.length == 0) {
    toDos.forEach((todo) => printTodo(todo));
  } else {
    toDos.forEach((todo) => {
      if (todo.memo.includes(keyword)) {
        printTodo(todo);
      }
    });
  }
};

init();

const allBtn = document.querySelector("#cat-btn-all");
const completeBtn = document.querySelector("#cat-btn-complete");
const incompleteBtn = document.querySelector("#cat-btn-incomplete");
allBtn.addEventListener("click", handleCategoryClick);
completeBtn.addEventListener("click", handleCategoryClick);
incompleteBtn.addEventListener("click", handleCategoryClick);

const searchFormInput = document.querySelector("#search-form__input");
searchFormInput.addEventListener("input", handleSearch);
