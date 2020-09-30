const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ["Jagienka", "Dobrawa", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];

const nameGenerator = () => {
    let index = Math.floor(Math.random() * names.length)
    div.textContent = `The best name for your child is: ${names[index]}`;
}


btn.addEventListener("click", nameGenerator);