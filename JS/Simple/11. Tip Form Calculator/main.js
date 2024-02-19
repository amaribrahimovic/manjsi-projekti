const cost = document.querySelector('.input1');
const people = document.querySelector('.input2');
const service = document.querySelector('select');
const btn = document.querySelector('button');
const whiteSpace = document.querySelector('.flex');
const redSection = document.querySelector(".frame");
const blueSection = document.querySelector('.frame2');

const calculate = () => {
    if (cost.value === '') {
        const warning1 = document.createElement('h3');
        warning1.innerText = "Please pick the price";
        redSection.appendChild(warning1);
        redSection.style.display = "block";
    }
    if (people.value === '') {
        const warning2 = document.createElement('h3');
        warning2.innerText = "Please pick how many people are sharing the bill";
        redSection.appendChild(warning2);
        redSection.style.display = "block";
    }
    if (service.value === 'Choose...') {
        const warning3 = document.createElement('h3');
        warning3.innerText = "Please pick the service";
        redSection.appendChild(warning3);
        redSection.style.display = "block";
    } else {
        let result1 = cost.value / people.value;
        let result2 = (result1 / 100) * service.value;

        const result3 = document.createElement('h3');
        result3.innerText = `${result2}€`;
        blueSection.appendChild(result3);
        blueSection.style.display = "block";
    }
}

btn.addEventListener('click', calculate);