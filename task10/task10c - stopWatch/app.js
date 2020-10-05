const stopWatch = () => {
    let numberOfSeconds = 0;
    document.body.textContent = `You are here ${numberOfSeconds} s.`;

    function countdownTime() {
        numberOfSeconds++;
        document.body.textContent = `You are here ${numberOfSeconds} s.`;
    }
    return countdownTime;
}
const startStopWatch = stopWatch();

setInterval(startStopWatch, 1000);