const counter = document.querySelector("h2");
const buttonLower = document.querySelector(".lower");
const buttonAdd = document.querySelector(".add");
let i = 0;

const add = ()=>{
    i++;
    counter.innerText = i;
    if (i > 0) {
    counter.style.color = "green";
    }
    else if(i < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
}

const lower = ()=>{
    i--;
    counter.innerText = i;
    if (i > 0) {
    counter.style.color = "green";
    }
    else if(i < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
}


buttonLower.addEventListener("click", lower);
buttonAdd.addEventListener("click", add);