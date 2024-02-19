const numbers = document.querySelectorAll('h3');
const equals = document.querySelector('h4');
const result = document.querySelector('h1');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

let operation;
let numberArray1 = [];
let numberArray2 = [];

const addNumber = (e) =>{
    numberArray1.push(Number(e.target.innerText));
    console.log(numberArray1);
}

const multiply = () =>{
    let operation = '*';

    const addNumber = (e) =>{
        numberArray2.push(Number(e.target.innerText));
        console.log(numberArray2);
    }
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', addNumber);
    }
}


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', addNumber);
}