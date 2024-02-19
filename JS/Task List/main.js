const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
const dltBtn = document.querySelector('.deleteItem')

const addItem = () => {
    const item = input.value;
    const task = document.createElement('li');
    task.innerHTML = `${item}<i>x</i>`;
    list.appendChild(task);
}

const dltItems = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

btn.addEventListener('click', addItem);
dltBtn.addEventListener('click', dltItems);