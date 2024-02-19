
const button = document.querySelector('button');
const heading = document.querySelector('h1');
const body = document.querySelector('body');
const colors = ['#2ECC71','#3498DB','#8E44AD','#E67E22','#34495E'];


const change = ()=>{
    let i = 0
    
    let hex;

    while (i < 5) {
        let random = Math.floor(Math.random() * 5);
        hex = colors[random];
        i++;
    }
    heading.textContent = `HEX COLOR: ${hex}`;
    body.style.backgroundColor = `${hex}`;
}

button.addEventListener('click', change);