const image = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let i = 0;

const forward = ()=>{
    if (i < 4) {
        i++;
        image.style.backgroundImage = `url(${images[i]})`;
    }
    else{
        i = 0;
        image.style.backgroundImage = `url(${images[i]})`;
    }
}

const backwards = ()=>{
    
    if (i > 0) {
        i--;  
        image.style.backgroundImage = `url(${images[i]})`;
           
    }
    else{
        i = 4;
        image.style.backgroundImage = `url(${images[i]})`;
    } 
}

left.addEventListener("click", backwards);
right.addEventListener("click", forward);