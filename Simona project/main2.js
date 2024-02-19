const tacka = document.querySelector('#tacka');
const p = document.querySelector('#p');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');

console.log(p);
console.log(n1);
console.log(n2);

p.addEventListener('click', ()=>{
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);  

    localStorage.count = localStorage.count + 1;

    setTimeout(() => {
        window.location.href = `./endpage.html`;
    }, 4000);  
}, { once: true });

n1.addEventListener('click', ()=>{
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);
      
    setTimeout(() => {
        window.location.href = `./endpage.html`;
    }, 4000);  
});

n2.addEventListener('click', ()=>{
    n1.classList.add('n');
    
    setTimeout(() => {
        n2.classList.add('n');
    }, 1000);

    setTimeout(() => {
        p.classList.add('p');
    }, 2000);  

    setTimeout(() => {
        window.location.href = `./endpage.html`;
    }, 4000);  
});