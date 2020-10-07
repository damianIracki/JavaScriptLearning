let toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const span = document.querySelector("h1 span");
const listItems = document.getElementsByClassName('task');
const input = document.querySelector("input");

const renderList = (array) => {
    ul.textContent = "";

    array.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
}

const searchTask = (e) => {
    let searchingTask = e.target.value.toLowerCase();
    console.log(searchingTask);

    let tasks = [];
    tasks = toDoList.filter(task => task.innerText.toLowerCase().includes(searchingTask));
    console.log(tasks);

    if (e.target.value === "") renderList(toDoList);

    renderList(tasks);
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    span.textContent = toDoList.length;

    renderList(toDoList);
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (taskName === "") return;
    const newTask = document.createElement('li');
    newTask.className = "task";
    newTask.innerHTML = taskName + ' <button class="delete">Delete</button>';
    toDoList.push(newTask);

    renderList(toDoList);

    ul.appendChild(newTask);
    input.value = "";
    span.textContent = listItems.length;

    document.querySelector("li:last-child button").addEventListener("click", removeTask);

}


input.addEventListener("input", searchTask)
form.addEventListener("submit", addTask);