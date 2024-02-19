let btnAll = document.querySelector(".btnAll");
let btnCakes = document.querySelector(".btnCakes");
let btnCupcakes = document.querySelector(".btnCupcakes");
let btnSweets = document.querySelector(".btnSweets");

let cakes = document.querySelectorAll(".cake");
let cupCakes = document.querySelectorAll(".cupcakes");
let sweets = document.querySelectorAll(".sweets");

let images = document.querySelectorAll("img");

let bgModal = document.querySelector(".bg-modal");
let Modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-img");

let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");


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

const pressImage = (e)=>{
    bgModal.style.visibility = "visible";
    bgModal.style.opacity = 1;
    Modal.style.backgroundImage = `url('${e.target.src}')`;  
}

const closeModal = ()=>{
    bgModal.style.visibility = "hidden";
    bgModal.style.opacity = 0;
}

btnAll.addEventListener("click", pressAll);
btnCakes.addEventListener("click", pressCakes);
btnCupcakes.addEventListener("click", pressCupcakes);
btnSweets.addEventListener("click", pressSweets);
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", pressImage);
}
bgModal.addEventListener("click", closeModal);