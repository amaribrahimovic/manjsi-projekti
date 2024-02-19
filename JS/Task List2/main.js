const taskName = document.querySelector('#name');
const taskDesc = document.querySelector('#desc');
const taskTime = document.querySelector('#due-time');
const btnAdd = document.querySelector('.btn');
const taskList = document.querySelector('tbody');
const container = document.querySelector('.container');
const form = document.querySelector('form');

class Task {
    constructor(name, desc, time) {
        this.name = name;
        this.desc = desc;
        this.time = time;
    }
}

class UI {
    addTaskToList(newTask) {
        const tr = document.createElement('tr');
        tr.classList.add('border', 'border-primary')
        tr.innerHTML = `
            <td>${newTask.name}</td>
            <td>${newTask.desc}</td>
            <td>${newTask.time}</td>
        `
        taskList.appendChild(tr);
    }
    ClearFields() {
        taskName.value = '';
        taskDesc.value = '';
        taskTime.value = '';
    }
    showAlert() {
        const alert = document.createElement('h3');
        alert.classList.add('alert', 'alert-danger');
        alert.textContent = 'Please fill all fields';
        container.insertBefore(alert, form);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

const addTask = (e) => {
    const name = taskName.value;
    const desc = taskDesc.value;
    const time = taskTime.value;
    const newTask = new Task(name, desc, time);

    ui = new UI();

    if (name === '' || desc === '' || time === '') {
        ui.showAlert();
    } else {
        ui.addTaskToList(newTask);
        ui.ClearFields();
    }

    e.preventDefault();
}

btnAdd.addEventListener('click', addTask);