let result = document.querySelector("h1");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let dot = document.querySelector(".dot");

let numbers = document.querySelectorAll("h2")

let equals = document.querySelector(".green");
let clear = document.querySelector(".red");



const addNumber = (e) => {
    result.innerText = result.innerText + e.target.innerText;






}

const plusFunc = () => {
    if (result.innerText === "") {

    } else {
        let number1 = result.innerText;
        result.innerText = `${number1} ${plus.innerText}`;
        console.log("dick");
    }
}

const minusFunc = () => {
    if (result.innerText === "") {

    } else {
        let number1 = result.innerText;
        result.innerText = `${number1} ${minus.innerText}`;
    }
}

const divideFunc = () => {
    if (result.innerText === "") {

    } else {
        let number1 = result.innerText;
        result.innerText = `${number1} ${divide.innerText}`;
        console.log("dick");
    }
}

const multiplyFunc = () => {
    if (result.innerText === "") {

    } else {
        let number1 = result.innerText;
        result.innerText = `${number1} ${multiply.innerText}`;
        console.log("dick");
    }
}

const calculate = () => {

}
equals.addEventListener('click', calculate);

const clearField = () => {
    result.innerText = "";
}

clear.addEventListener('click', clearField);

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", addNumber);
    console.log(numbers[i].innerText);
}
plus.addEventListener('click', plusFunc);
minus.addEventListener('click', minusFunc);
divide.addEventListener('click', divideFunc);
multiply.addEventListener('click', multiplyFunc);