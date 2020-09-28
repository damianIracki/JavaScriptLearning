const btn = document.querySelector("button");
const list = document.querySelector("ul");

let index = 1;

const addLi = function () {
    const li = document.createElement("li");
    li.textContent = index;
    if (index % 3 != 0) {
        list.appendChild(li);
    } else {
        li.classList.add("third");
        list.appendChild(li);
    }
    index += 2;
}

btn.addEventListener("click", addLi);