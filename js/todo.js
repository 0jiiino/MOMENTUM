const TodoForm = document.getElementById("todo-form");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.getElementById("todo-list");

const Todos_KEY = "todos";
const Todos = [];

//Todos 배열에 있는 것을 string의 형식으로 localStorage에 저장
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(Todos));
}

function deleteTodo(apple) {
    // 삭제하고 싶은 li. 즉, button이 부모로 가지는 li
    const li = apple.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    // span을 li 안에 집어넣음
    li.appendChild(span);
    li.appendChild(button); // button을 span 뒤에 위치하게 할 것이므로.
    TodoList.appendChild(li);
}

function handleTodoSubmit(apple) {
    apple.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = "";
    Todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

TodoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(Todos_KEY);

if(savedTodos !== null) {
    // string 형식의 todo를 배열 형태로 바꿔줌
    const parsedTodos = JSON.parse(savedTodos);
    // 각 배열에 들어있는 element에 대해 각각 함수 실행
    // arrow function을 사용하는게 더 간단히 코드 작성
    parsedTodos.forEach(paintTodo);
}