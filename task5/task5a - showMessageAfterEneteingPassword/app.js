const input = document.querySelector("#pass");
const div = document.querySelector("div")

const passwords = ["user", "spring"];
const messages = ["HELLO WORLD", "I miss spring"];

input.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    div.textContent = "";
    passwords.forEach((password, index) => {
        if (password === inputValue) {
            div.textContent = messages[index];
            event.target.value = "";
        }
    });
});

input.addEventListener('focus', (event) => {
    event.target.classList.add("active");
});

input.addEventListener('blur', (event) => {
    event.target.classList.remove("active");
    event.target.value = "";
});