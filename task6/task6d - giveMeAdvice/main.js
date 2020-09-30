const advices = ["Walcz", "Przemyśl to jeszcze raz"];

const h1 = document.querySelector("h1")
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowOptions = document.querySelector(".showOptions");
const input = document.querySelector("input");

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    let advice = input.value;
    if (advice.length) {
        if (!advices.includes(advice)) {
            advices.push(advice);
            console.log(advices);
        } else {
            alert('Taka rada jest już w bazie!');
        }
        input.value = "";
    }
});

btnClean.addEventListener("click", (event) => {
    event.preventDefault();
    advices.length = 0;
    h1.textContent = ""
});

btnShowAdvice.addEventListener("click", (event) => {
    const numberOfAdvices = advices.length;
    const indexOfAdvice = Math.floor(Math.random() * advices.length);

    h1.textContent = advices[indexOfAdvice];
})

btnShowOptions.addEventListener("click", () => {
    let optionToShow = '';
    advices.forEach(advice => {
        optionToShow += advice + "\n"
    })
    alert(optionToShow);
})