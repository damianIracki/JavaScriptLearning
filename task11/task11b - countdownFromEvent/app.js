const eventTime = new Date('2021-01-25 22:34:00').getTime();

const spanDays = document.querySelector("span.d");
const spanHours = document.querySelector("span.h");
const spanMinutes = document.querySelector("span.m");
const spanSeconds = document.querySelector("span.s");

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = eventTime - nowTime
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    days = days < 10 ? `0${days}` : days

    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((time / (1000 * 60)) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((time / (1000)) % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;

}, 1000)