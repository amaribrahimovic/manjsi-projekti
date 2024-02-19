const btnAll = document.querySelector(".btnAll");
const btnCakes = document.querySelector(".btnCakes");
const btnCupcakes = document.querySelector(".btnCupcakes");
const btnSweets = document.querySelector(".btnSweets");

const cakes = document.querySelectorAll(".cake");
const cupCakes = document.querySelectorAll(".cupcakes");
const sweets = document.querySelectorAll(".sweets");


const pressAll = ()=>{
    let i;
    for(i = 0; i < cakes.length; i++){
        cakes[i].style.display = "block";
    }
    for(i = 0; i < cupCakes.length; i++){
        cupCakes[i].style.display = "block";
    }
    for(i = 0; i < sweets.length; i++){
        sweets[i].style.display = "block";
    }
}

const pressCakes = ()=>{
    let i;
    for(i = 0; i < cakes.length; i++){
        cakes[i].style.display = "block";
    }
    for(i = 0; i < cupCakes.length; i++){
        cupCakes[i].style.display = "none";
    }
    for(i = 0; i < sweets.length; i++){
        sweets[i].style.display = "none";
    }
}

const pressCupcakes = ()=>{
    let i;
    for(i = 0; i < cakes.length; i++){
        cakes[i].style.display = "none";
    }
    for(i = 0; i < cupCakes.length; i++){
        cupCakes[i].style.display = "block";
    }
    for(i = 0; i < sweets.length; i++){
        sweets[i].style.display = "none";
    }
}

const pressSweets = ()=>{
    let i;
    for(i = 0; i < cakes.length; i++){
        cakes[i].style.display = "none";
    }
    for(i = 0; i < cupCakes.length; i++){
        cupCakes[i].style.display = "none";
    }
    for(i = 0; i < sweets.length; i++){
        sweets[i].style.display = "block";
    }
}

btnAll.addEventListener("click", pressAll);
btnCakes.addEventListener("click", pressCakes);
btnCupcakes.addEventListener("click", pressCupcakes);
btnSweets.addEventListener("click", pressSweets);