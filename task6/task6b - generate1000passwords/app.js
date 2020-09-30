const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = 'ABCDEFGHIJKLMNOPRQSTWUXYZ0123456789'

const numberOfPasswords = 1000;
const numberOfCharsInPassowrd = 10;

const passwordsGenerator = () => {
    for (let i = 0; i < numberOfPasswords; i++) {
        let password = '';
        for (let i = 0; i < numberOfCharsInPassowrd; i++) {
            let indexOfChar = Math.floor(Math.random() * chars.length)
            password += chars.substr(indexOfChar, 1);
        }
        const div = document.createElement('div');
        div.textContent = password;
        section.appendChild(div);
    }
}

btn.addEventListener("click", passwordsGenerator);