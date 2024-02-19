const inputQuestion = document.querySelector('#question');
const inputAnswer = document.querySelector('#answer');
const btnSave = document.querySelector('.btn');
const cardList = document.querySelector('#card-list');

class Card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

class UI {
    createCard(card) {
        console.log("yes");
        const UIcard = document.createElement('div');
        UIcard.classList.add('col', 'border', 'rounded', 'd-flex', 'flex-column', 'small-card', 'mt-3', 'p-3', 'justify-content-between', 'h-25');
        UIcard.innerHTML = `
            <h3>${card.question}</h3>
            <h3 id='answer2'>${card.answer}</h3>
            <a class='show-answer'>Show Answer</a>
            <button class='btn btn-primary' id='delete-button'>Delete</button>
        `;
        cardList.appendChild(UIcard);
        const answer2 = document.querySelector('#answer2');
        answer2.style.display = 'none';
        const showAnswer = document.querySelector('.show-answer').addEventListener('click', () => {
            answer2.style.display = 'block';
        });

        const btnDelete = document.querySelector('#delete-button').addEventListener('click', () => {
            UIcard.remove();
        });
    }

    displayAlert() {

    }
}

const getInputValues = (e) => {
    const question = inputQuestion.value;
    const answer = inputAnswer.value;

    const card = new Card(question, answer);
    const ui = new UI();

    if (question === '' || answer === '') {
        ui.displayAlert();
    } else {
        ui.createCard(card);
    }

    e.preventDefault();
}

btnSave.addEventListener('click', getInputValues);