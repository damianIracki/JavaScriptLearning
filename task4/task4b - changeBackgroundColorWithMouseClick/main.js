
document.body.addEventListener("click", (event) => {
    const mouseXPosition = event.clientX;
    const mouseYPosition = event.clientY;

    if (mouseXPosition % 2 === 0 && mouseYPosition % 2 === 0) {
        document.body.style.backgroundColor = "red";
    } else if (mouseYPosition % 2 === 1 && mouseXPosition % 2 === 1) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "green";
    }

    console.log(`${mouseXPosition}, ${mouseYPosition}`);
})