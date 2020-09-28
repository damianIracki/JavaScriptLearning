const div = document.createElement("div");
document.body.style.height = "10000vh";
let height = 10;

let flag = true;

div.style.width = "100%";
div.style.height = height + "px";
div.style.background = "GREEN";
div.style.position = "fixed";

document.body.appendChild(div);

window.addEventListener("scroll", function () {

    if (height > window.innerHeight / 2) {
        flag = !flag;
        div.style.background = "RED";
    } else if (height <= 0) {
        flag = !flag;
        div.style.background = "GREEN";
    }

    if (flag) {
        height += 5;
        div.style.height = height + "px";
    } else {
        height -= 5;
        div.style.height = height + "px";
    }
});