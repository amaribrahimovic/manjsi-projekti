const img = document.querySelector("img");
const h3 = document.querySelector("h3");
const p = document.querySelector("p");
const buttonBackwards = document.querySelector(".backwards");
const buttonForward = document.querySelector(".forward");
const pictures = ["1.jpg","2.jpg","3.jpg"];
const names = ["A","B","C"];
const quotes = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime. Unde commodi non odit veniam facere earum aliquam est totam nesciunt quia ab et repellendus, debitis fugiat iusto possimus esse?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime.","Unde commodi non odit veniam facere earum aliquam est totam nesciunt quia ab et repellendus, debitis fugiat iusto possimus esse?"];

let i = 0;

const forward = ()=>{
    if(i < 2){
        i++;
        img.src = `${pictures[i]}`;
        h3.innerText = `${names[i]}`;
        p.innerText = `${quotes[i]}`;
    }
    else{
        i = 0;
        img.src = `${pictures[i]}`;
        h3.innerText = `${names[i]}`;
        p.innerText = `${quotes[i]}`;
    }
}

const backwards = ()=>{
    if(i > 0){
        i--;
        img.src = `${pictures[i]}`;
        h3.innerText = `${names[i]}`;
        p.innerText = `${quotes[i]}`;
    }
    else{
        i = 2;
        img.src = `${pictures[i]}`;
        h3.innerText = `${names[i]}`;
        p.innerText = `${quotes[i]}`;
    }
}

buttonForward.addEventListener("click", forward);
buttonBackwards.addEventListener("click", backwards);