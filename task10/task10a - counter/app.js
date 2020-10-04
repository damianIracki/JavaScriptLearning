const add = (start = 0) => {
    let number = start;
    return() => {
        number++;
        document.body.textContent = `Current state of click current is: ${number}`
    }
}

const counter = add();

document.addEventListener("click", counter);

