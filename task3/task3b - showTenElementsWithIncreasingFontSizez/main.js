let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const ul = document.createElement("ul");
    btn.textContent = "Dodaj 10 elementów list";
    document.body.appendChild(btn);
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
}
const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li");
        li.textContent = `Element nr ${orderElement}`
        document.querySelector("ul").appendChild(li);
        li.style.fontSize = (size) + "px";
        size++;
        orderElement++;
    }
}

init();