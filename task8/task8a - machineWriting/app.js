const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur venenatis sapien ut pulvinar. Fusce in ultricies nunc, at aliquet nisi. Aenean viverra semper magna sit amet malesuada. Fusce ac eleifend nulla, eu lobortis diam. Nulla ac sem quam. Maecenas eu massa at elit sodales eleifend in non odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lorem purus, vulputate nec ultrices at, laoreet id ex. Ut consectetur sem nisi. Nam et ligula orci. Aliquam volutpat scelerisque dolor id sodales. Morbi scelerisque sed erat laoreet suscipit. Mauris aliquam luctus ipsum nec pulvinar. Fusce egestas porta.'

let textIndex = 0;
const time = 50;

const addLetter = () => {
    spanText.textContent += text[textIndex];
    textIndex++;
    if (textIndex >= text.length) {
        clearInterval(indexTyping);
    }
}

const cursorAnimation = () => {
    spanCursor.classList.toggle("active");
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);