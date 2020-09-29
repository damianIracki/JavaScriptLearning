
const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
    div.textContent = "";
    let inputValue = e.target.value;

    passwords.forEach((password, index) => {
        if (inputValue.toUpperCase() === password.toUpperCase()) {
            div.textContent = messages[index];
            input.value = "";
        }
    });

}

input.addEventListener("input", showMessage)