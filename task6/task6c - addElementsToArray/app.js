const names = [];

const btn = document.querySelector("button");
const addToArray = (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    const div = document.querySelector("div");
    const name = input.value;
    if (input.value.length) {
        if (!names.includes(name)) {
            names.push(name);
        } else {
            alert("This element already is in Array!");
        }
    }
    div.textContent += name + ", ";
    input.value = "";
}

btn.addEventListener("click", addToArray)