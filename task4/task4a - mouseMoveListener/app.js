const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (event) => {

    const mouseXPosition = event.clientX;
    const mouseYPostion = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    h1.textContent = `${mouseXPosition}, ${mouseYPostion}`;

    const red = mouseXPosition / windowWidth * 100;
    const green = mouseYPostion / windowHeight * 100;
    const blue = 50;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

});