const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();


}

const list = document.querySelectorAll(`button[data-key]`);
list.forEach(item => item.addEventListener("click", removeTask));