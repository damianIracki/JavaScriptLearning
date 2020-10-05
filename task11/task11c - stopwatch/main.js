const btnStart = document.querySelector("button.main");
const btnReset = document.querySelector("button.reset");
const textToShow = document.querySelector("div.time div")

let time = 0;
let active = false;

const calculateTime = () => {
    time++;
    textToShow.textContent = (time / 100).toFixed(2);
}

const startStopwatch = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Pause';
        interval = setInterval(calculateTime, 10);
    } else {
        active = !active;
        btnStart.textContent = "Start"
        clearInterval(interval);
    }

}


const stopStopwatch = () => {
    active = false;
    btnStart.textContent = "Start";
    clearInterval(interval);
    time = 0
    textToShow.textContent = "- - -";
}

btnStart.addEventListener("click", startStopwatch);
btnReset.addEventListener("click", stopStopwatch);