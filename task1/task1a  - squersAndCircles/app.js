const btn = document.querySelector("button");
let index = 0;

const addElement = function () {
    index++;
    const div = document.createElement('div');
    div.textContent = index;
    // const divCircle = document.createElement(`<div class = "circle">${index}</div>`);
    if (index % 5 === 0) {
        div.className = "circle"
        document.body.appendChild(div);
    } else {
        document.body.appendChild(div);
    }
}
btn.addEventListener("click", addElement);