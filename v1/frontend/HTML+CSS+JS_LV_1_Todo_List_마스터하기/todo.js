const inputText = document.getElementById("input-text");
const inputButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

inputText.addEventListener("keydown", handleInputText);
inputButton.addEventListener("click", handleInputText);

function handleInputText(e) {
  if (e.isComposing) return;
  if (e.key === "Enter" || e.type === "click") {
    let inputValue = inputText.value;
    console.log(inputValue);
    if (!inputValue) {
      alert("It's empty!");
      return;
    }

    const li = document.createElement("li");
    li.className = "flex-row";

    const doneBtn = document.createElement("button");
    doneBtn.className = "todo-btn";
    doneBtn.addEventListener("click", () => {
      span.classList.toggle("completed");
      if (span.classList.contains("completed")) {
        doneBtn.className = "done-btn";
      } else {
        doneBtn.className = "todo-btn";
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "trash-btn";
    removeBtn.addEventListener("click", () => {
      li.parentNode.removeChild(li);
    });

    const span = document.createElement("span");
    span.innerText = inputValue;

    li.appendChild(doneBtn);
    li.appendChild(removeBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    inputText.value = "";
  }
}

// 전체: [1, 2, 3, 4, 5]

// 진행중: [1, 3, 4] => [0, 1, 2]

// 완료: [ 2, 5] => [1, 2]


// let allLocal = [];
// let todoLocal = [];
// let doneLocal = [];
