const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector(".todo-form__input");
const toDoList = document.querySelector(".todo-list__ul");
const doneList = document.querySelector(".done-list__ul");

const TODOS_KEY = "todos";
let toDos = [];

const DONES_KEY = "dones";
let dones = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    localStorage.setItem(DONES_KEY, JSON.stringify(dones));
}

function deleteToDo(event) {
    const li = event.target.closest("li"); // 버튼 컨테이너가 아닌 전체 li 요소를 선택
    const isFinished = li.classList.contains("finished");
    const id = parseInt(li.id);

    li.remove();

    if (isFinished) {
        dones = dones.filter((done) => done.id !== id);
    } else {
        toDos = toDos.filter((toDo) => toDo.id !== id);
    }

    saveToDos();
}

function finishToDo(event) {
    const li = event.target.closest("li"); // 버튼 컨테이너가 아닌 전체 li 요소를 선택
    li.classList.toggle("finished");

    const toDoObj = {
        text: li.querySelector("span").innerText,
        id: parseInt(li.id)
    };

    if (li.classList.contains("finished")) {
        doneList.appendChild(li);   // 'finished' 클래스가 있다면 doneList로 이동
        dones.push(toDoObj);
        toDos = toDos.filter((toDo) => toDo.id !== toDoObj.id);
    } else {
        toDoList.appendChild(li);  // 'finished' 클래스가 없다면 toDoList로 이동
        toDos.push(toDoObj);
        dones = dones.filter((done) => done.id !== toDoObj.id);
    }

    saveToDos();
}

function addToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const finishButton = document.createElement("button");
    finishButton.classList.add("finishBtn");
    const finishIcon = document.createElement("img");
    finishIcon.src = "img/finish_btn.svg";
    finishIcon.alt = "완료";
    finishButton.appendChild(finishIcon);
    finishButton.addEventListener("click", finishToDo);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "img/delete_btn.svg";
    deleteIcon.alt = "삭제";
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", deleteToDo);

    buttonContainer.appendChild(finishButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    if (newToDo.finished) {
        li.classList.add("finished");
        doneList.appendChild(li);
    } else {
        toDoList.appendChild(li);
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    addToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONES_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}

if (savedDones !== null) {
    const parsedDones = JSON.parse(savedDones);
    dones = parsedDones;
    parsedDones.forEach(todo => {
        todo.finished = true;
        addToDo(todo);
    });
}
