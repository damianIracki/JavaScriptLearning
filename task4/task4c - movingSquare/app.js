const div = document.querySelector("div");
let divXPosition = 150;
let divYPosition = 50;

div.style.left = divXPosition + "px"
div.style.top = divYPosition + "px"

let divIsClicked = false;

let divOffetX;
let divOffetY;

div.addEventListener("mousedown", (event) => {
    div.style.backgroundColor = "grey";
    divIsClicked = !divIsClicked

    divOffetX = event.offsetX;
    divOffetY = event.offsetY;
});

div.addEventListener("mousemove", (event) => {
    if (divIsClicked) {
        divXPosition = event.clientX;
        divYPosition = event.clientY;

        div.style.left = divXPosition - divOffetX + "px"
        div.style.top = divYPosition - divOffetY + "px"
    }
});

div.addEventListener("mouseup", (event) => {
    div.style.backgroundColor = "black"
    divIsClicked = !divIsClicked

});