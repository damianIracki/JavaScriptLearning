
const btn = document.querySelector("button");
const liList = document.querySelectorAll("li");

let fontSize = 10;

btn.addEventListener("click", function () {

    liList.forEach((liItem) => {
        if (liItem.style.display != "block") {
            liItem.style.display = "block";
        }
        liItem.style.fontSize = fontSize + "px"
    })


    // function increaseFontSize(li) {
    //     li.style.fontSize = fontSize + "px";
    // }

    // function setDispalyToBlock(li) {
    //     li.style.display = "block";
    // }

    // if (fontSize === 10) {
    //     liList.forEach(setDispalyToBlock);
    // }

    // liList.forEach(increaseFontSize);

    // if (fontSize === 10) {
    //     for (let i = 0; i < liList.length; i++) {
    //         liList[i].style.display = "block"
    //     }
    // }


    // for (let i = 0; i < liList.length; i++) {
    //     liList[i].style.fontSize = fontSize + "px"
    // }

    fontSize++;
})