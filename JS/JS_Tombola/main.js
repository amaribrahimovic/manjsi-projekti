const izzrebanoStevilo = document.querySelector('.izzrebano-stevilo');
const start = document.querySelector('.start');
const next = document.querySelector('.next');
const reset = document.querySelector('.reset');
const userNumber = document.querySelectorAll('.user-number');
const pcNumber = document.querySelectorAll('.pc-number');
const rezultat = document.querySelector('.rezultat');
const glasba = document.querySelector('.glasba');
const timer = document.querySelector('.timer');
const muzka = new Audio('crave.mp3');
next.disabled = true;
let j = 0;

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let y = 89;
let userScore = 0;
let pcScore = 0;
let sekunde = 0;

const cardNumbers = () =>{
    const timerInterval = setInterval(() => {
        sekunde++;
        timer.innerText = sekunde;
        if (pcScore >= 15 || userScore >= 15) {
            clearInterval(timerInterval);
        }
    }, 1000);
    next.disabled = false;
    for (let i = 0; i < 15; i++) {
        let x = Math.floor(Math.random() * y) + 1;
        userNumber[i].innerText = numbersArray[x];
        y--;
        numbersArray.splice(x, 1);
    }
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    for (let i = 0; i < 15; i++) {
        let x = Math.floor(Math.random() * y) + 1;
        pcNumber[i].innerText = numbersArray[x];
        y--;
        numbersArray.splice(x, 1);
    }
    start.disabled = true;
    y = 89;
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
}

const rng = () =>{
    let x = Math.floor(Math.random() * y) + 1;
    izzrebanoStevilo.innerText = numbersArray[x];
    console.log(numbersArray[x]);
    y--;
    console.log(numbersArray[x]);
    
    for (let i = 0; i < 15; i++) {
        console.log(numbersArray[x]);
        let neki = userNumber[i].textContent.includes(numbersArray[x])
        console.log(numbersArray[x]);
        if (neki) {
            userNumber[i].innerText = '';
            userScore++;
            break;
        }
    }

    if (userScore >= 15) {
        rezultat.innerText = 'Rezultat: Igralec zmaga';
        next.disabled = true;
    }

    for (let i = 0; i < 15; i++) {
        let neki = pcNumber[i].textContent.includes(numbersArray[x]);
        if (neki) {
            pcNumber[i].innerText = '';
            pcScore++;
            break;
        }
    }

    if (pcScore >= 15) {
        rezultat.innerText = 'Rezultat: Računalnik zmaga';
        next.disabled = true;
    }

    numbersArray.splice(x, 1);
}

const playGlasba = () =>{
    console.log();
    if (j == 0) {
        muzka.play();
        j = 1;
    } else{
        muzka.pause();
        j = 0;
    }
    
}

next.addEventListener('click', rng);
start.addEventListener('click', cardNumbers);
reset.addEventListener('click', ()=> location.reload());
glasba.addEventListener('click', playGlasba);