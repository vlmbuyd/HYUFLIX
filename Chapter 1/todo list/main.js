const toDoForm = document.querySelector(".todo-form");
const input = document.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const paintToDo = () => {
  const toDoInput = input.value;
  input.value = "";
  let li = document.createElement("li");
  li.innerText = toDoInput;
  let btn = document.createElement("button");
  btn.innerText = "완료";
  li.appendChild(btn);
  toDoList.appendChild(li);
};

toDoForm.addEventListener("submit", paintToDo);
