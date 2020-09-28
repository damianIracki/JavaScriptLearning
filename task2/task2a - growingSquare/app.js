const square = document.createElement('div');
document.body.appendChild(square);

let size = 50;
let flag = true

square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function () {

    if (size >= window.innerWidth / 2) {
        flag = !flag
    }

    if (size <= 0) {
        flag = !flag;
    }

    if (flag) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

});