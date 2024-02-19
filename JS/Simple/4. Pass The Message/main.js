const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

const send = ()=>{
    p.textContent = input.value;
}

button.addEventListener("click", send);