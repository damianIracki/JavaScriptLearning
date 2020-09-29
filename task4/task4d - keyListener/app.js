let red = 100;
let green = 100;
let blue = 100;

const changeBackgroundColor = function (red, green, blue) {
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

changeBackgroundColor(red, green, blue);

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowUp") {
        if (red < 255) {
            red++;
            green++;
            blue++;
        }
        changeBackgroundColor(red, green, blue);
    } else if (event.key === "ArrowDown") {
        if (red > 0) {
            red--;
            blue--;
            green--;
        }
        changeBackgroundColor(red, green, blue);
    }
});