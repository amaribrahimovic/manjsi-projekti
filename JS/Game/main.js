const inputName = document.querySelector('#name');
const btnSubmit = document.querySelector('#btn-submit');
const container = document.querySelector('.container1');
const form = document.querySelector('form');

let gameLog = document.createElement('div');

let happiness = 100;
let health = 100;
let food = 100;
let money = 0;
let age = 0;

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

const inputAnswer = document.createElement('input');

const btnNextYear = document.createElement('button');

const btnDecision = document.createElement('button');

const submitName = (e) => {
    if (inputName.value === '') {
        const alert = document.createElement('h2');
        alert.classList.add('alert-danger', 'mt-3', 'p-2');
        alert.textContent = 'Please enter your name';
        container.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    } else {
        let name = inputName.value;
        form.style.display = "none";

        const container2 = document.createElement('div');
        container2.classList.add('container', 'bg-primary');
        container.appendChild(container2);

        const list = document.createElement('ul');
        list.classList.add('list-group', 'p-2');
        container2.appendChild(list);

        li1.classList.add('list-group-item', 'mt-1', 'mb-1');
        li2.classList.add('list-group-item', 'mt-1', 'mb-1');
        li3.classList.add('list-group-item', 'mt-1', 'mb-1');
        li4.classList.add('list-group-item', 'mt-1', 'mb-1');
        li5.classList.add('list-group-item', 'mt-1', 'mb-1');

        li1.textContent = `Happiness: ${happiness}`;
        li2.textContent = `Health: ${health}`;
        li3.textContent = `Food: ${food}`;
        li4.textContent = `Money: ${money}`;
        li5.textContent = `Age: ${age}`;

        list.appendChild(li1);
        list.appendChild(li2);
        list.appendChild(li3);
        list.appendChild(li4);
        list.appendChild(li5);

        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        gameLog.classList.add('card', 'container', 'mt-3', 'game-log');
        gameLog.style.overflow = 'scroll';
        gameLog.innerText = `Welcome to Life Simulator ${name}! Keep track of your stats and try to survive as much as possible`;
        container.appendChild(gameLog);

        inputAnswer.classList.add('form-control', 'mt-3');
        inputAnswer.disabled = true;
        container.appendChild(inputAnswer);

        btnNextYear.classList.add('btn', 'btn-primary', 'w-100', 'mt-3');
        btnNextYear.textContent = 'Next Year';
        container.appendChild(btnNextYear);

        btnNextYear.addEventListener('click', () => {
            age++;
            if (age < 6) {
                console.log('china');
                age6();
            }
            else if (6 < age < 18) {
                age18();

            }
            else if (age > 18) {
                ageAdult();
            }
        });
    }
    e.preventDefault();
}

const age6 = () => {
    let randomEvent = Math.floor(Math.random() * 6);
    switch (randomEvent) {
        case 0:
            gameLog.innerText = `${gameLog.innerText} \nYou have injured yourself`;
            health = health - 10;
            happiness = happiness - 10;
            break;
        case 1:
            gameLog.innerText = `${gameLog.innerText} \nYou got a disease`;
            health = health - 20;
            happiness = happiness - 15;
            break;
        case 2:
            gameLog.innerText = `${gameLog.innerText} \nYou have been vaccinated`;
            health = health + 20;
            happiness = happiness + 10;
            break;
        case 3:
            gameLog.innerText = `${gameLog.innerText} \nYou have visited a doctor`;
            health = health + 10;
            happiness = happiness + 5;
            break;
        case 4:
            gameLog.innerText = `${gameLog.innerText} \nYou ate`;
            food = food + 10
            health = health + 5;
            happiness = happiness + 5;
            break;
        case 5:
            gameLog.innerText = `${gameLog.innerText} \nYou had a drink`;
            food = food + 10
            health = health + 5;
            happiness = happiness + 5;
            break;
    }
    li1.textContent = `Happiness: ${happiness}`;
    li2.textContent = `Health: ${health}`;
    li3.textContent = `Food: ${food}`;
    li4.textContent = `Money: ${money}`;
    li5.textContent = `Age: ${age}`;
}

const age18 = () => {
    let randomEvent = Math.floor(Math.random() * 10);
    money = money + 50;
    switch (randomEvent) {
        case 0:
            gameLog.innerText = `${gameLog.innerText} \nYou have injured yourself`;
            health = health - 10;
            happiness = happiness - 10;
            break;
        case 1:
            gameLog.innerText = `${gameLog.innerText} \nYou got a disease`;
            health = health - 20;
            happiness = happiness - 15;
            break;
        case 2:
            gameLog.innerText = `${gameLog.innerText} \nYou have been vaccinated`;
            health = health + 20;
            happiness = happiness + 10;
            break;
        case 3:
            gameLog.innerText = `${gameLog.innerText} \nYou have visited a doctor`;
            health = health + 10;
            happiness = happiness + 5;
            break;
        case 4:
            gameLog.innerText = `${gameLog.innerText} \nYou ate`;
            food = food + 10;
            health = health + 5;
            happiness = happiness + 5;
            break;
        case 5:
            gameLog.innerText = `${gameLog.innerText} \nYou had a drink`;
            food = food + 10;
            health = health + 5;
            happiness = happiness + 5;
            break;
        case 6:
            gameLog.innerText = `${gameLog.innerText} \nYou had a fight`;
            food = food - 5;
            health = health - 5;
            break;
        case 7:
            gameLog.innerText = `${gameLog.innerText} \nYou got bullied`;
            food = food - 5;
            health = health - 5;
            happiness = happiness - 10;
            break;
        case 8:
            gameLog.innerText = `${gameLog.innerText} \nYou won the lottery`;
            happiness = happiness + 20;
            money = money + 10000;
            break;
        case 9:
            gameLog.innerText = `${gameLog.innerText} \nYou went to the gym`;
            food = food - 10;
            health = health + 5;
            happiness = happiness + 5;
            money = money - 10;
            break;
    }
    china();
}

const ageAdult = () => {
    let randomEvent = Math.floor(Math.random() * 12);
    money = money + 500;
    switch (randomEvent) {
        case 0:
            gameLog.innerText = `${gameLog.innerText} \nYou have injured yourself`;
            health = health - 10;
            happiness = happiness - 10;
            break;
        case 1:
            gameLog.innerText = `${gameLog.innerText} \nYou got a disease`;
            health = health - 20;
            happiness = happiness - 15;
            break;
        case 2:
            gameLog.innerText = `${gameLog.innerText} \nYou have been vaccinated`;
            health = health + 20;
            happiness = happiness + 10;
            break;
        case 3:
            gameLog.innerText = `${gameLog.innerText} \nYou have visited a doctor`;
            health = health + 10;
            happiness = happiness + 5;
            break;
        case 4:
            gameLog.innerText = `${gameLog.innerText} \nYou ate`;
            food = food + 10;
            health = health + 5;
            happiness = happiness + 5;
            break;
        case 5:
            gameLog.innerText = `${gameLog.innerText} \nYou had a drink`;
            food = food + 10;
            health = health + 5;
            happiness = happiness + 5;
            break;
        case 6:
            gameLog.innerText = `${gameLog.innerText} \nYou had a fight`;
            food = food - 5;
            health = health - 5;
            break;
        case 7:
            gameLog.innerText = `${gameLog.innerText} \nYou went to the gym`;
            food = food - 10;
            health = health + 5;
            happiness = happiness + 5;
            money = money - 10;
            break;
        case 8:
            gameLog.innerText = `${gameLog.innerText} \nYou won the lottery`;
            happiness = happiness + 20;
            money = money + 10000;
            break;
        case 9:
            gameLog.innerText = `${gameLog.innerText} \nYou got fired`;
            food = food - 5;
            happiness = happiness - 10;
            money = money - 500;
            break;
        case 7:
            gameLog.innerText = `${gameLog.innerText} \nYou got a baby`;
            happiness = happiness + 10;
            money = money - 100;
            break;
    }
}

const china = () => {
    let randomDecision = Math.floor(Math.random() * 4);

    btnNextYear.style.display = 'none';
    btnDecision.classList.add('btn', 'btn-primary', 'w-100', 'mt-3');
    btnDecision.textContent = 'Decision';
    container.appendChild(btnDecision);

    switch (randomDecision) {
        case 0:
            gameLog.innerText = `${gameLog.innerText} \nDo you want to buy a game, which costs 50€?`;
            inputAnswer.disabled = false;
            inputAnswer.placeholder = 'Put your answer in here';
            // if (inputAnswer.value === 'Yes' || inputAnswer.value === 'yes' || inputAnswer.value === 'Y' || inputAnswer.value === 'y') {}
            btnDecision.addEventListener('click', () => {
                gameLog.innerText = `${gameLog.innerText} \nYou bought the game`;
                money = money - 50;
                happiness = happiness + 10;
                btnNextYear.style.display = 'block';
                container.removeChild(btnDecision);
            })
            break;
        case 1:
            gameLog.innerText = `${gameLog.innerText} \nDo you want to visit a doctor (60€)`;
            inputAnswer.disabled = false;
            inputAnswer.placeholder = 'Put your answer in here';
            btnDecision.addEventListener('click', () => {
                gameLog.innerText = `${gameLog.innerText} \nYou visited a doctor`;
                money = money - 60;
                health = health + 10;
                btnNextYear.style.display = 'block';
                container.removeChild(btnDecision);
            })
            break;
        case 2:
            gameLog.innerText = `${gameLog.innerText} \nDo you want to eat dinner at a restaurant? (150€)`;
            inputAnswer.disabled = false;
            inputAnswer.placeholder = 'Put your answer in here';
            btnDecision.addEventListener('click', () => {
                gameLog.innerText = `${gameLog.innerText} \nYou ate at a restaurant`;
                money = money - 150;
                happiness = happiness + 10;
                food = food + 20;
                btnNextYear.style.display = 'block';
                container.removeChild(btnDecision);
                console.log("dick");
            })
            break;
        case 3:
            gameLog.innerText = `${gameLog.innerText} \nDo you want to buy a lotto ticket? (5€)`;
            inputAnswer.disabled = false;
            inputAnswer.placeholder = 'Put your answer in here';
            btnDecision.addEventListener('click', () => {
                let randomLotto = Math.floor(Math.random() * 1000)
                money = money - 5;
                if (randomLotto == 27) {
                    gameLog.innerText = `${gameLog.innerText} \nYou won the lottery!`;
                    happiness = happiness + 20;
                    money = money + 10000;
                    btnNextYear.style.display = 'block';
                    container.removeChild(btnDecision);
                } else {
                    gameLog.innerText = `${gameLog.innerText} \nYou did not win the lottery`;
                    btnNextYear.style.display = 'block';
                    container.removeChild(btnDecision);
                }
            })
            break;
    }
    checkStats();
}

const checkStats = () => {
    if (money <= 0) {
        gameLog.innerText = `${gameLog.innerText} \nYou are out of money`;
        food = food - 30;
        happiness = happiness - 20;
    }
    if (food <= 30) {
        gameLog.innerText = `${gameLog.innerText} \nYou are starving`;
        happiness = happiness - 10;
        health = health - 20;
    }
    if (happiness <= 30) {
        gameLog.innerText = `${gameLog.innerText} \nYou self harmed`;
        health = health - 30;
    }
    if (health <= 0) {
        gameLog.innerText = `${gameLog.innerText} \nYou died`;
        return;
    }
    if (food > 100) {
        food = 100;
    }
    if (happiness > 100) {
        happiness = 100;
    }
    if (health > 100) {
        health = 100;
    }
    li1.textContent = `Happiness: ${happiness}`;
    li2.textContent = `Health: ${health}`;
    li3.textContent = `Food: ${food}`;
    li4.textContent = `Money: ${money}`;
    li5.textContent = `Age: ${age}`;

}

btnSubmit.addEventListener('click', submitName);