const button = document.querySelector('button');
const text = document.querySelector('p');
const author = document.querySelector('h1');
const quotes = ['Be yourself; everyone else is already taken.','So many books, so little time.','A room without books is like a body without a soul.','Be the change that you wish to see in the world.','If you tell the truth, you do not have to remember anything.'];
const authors =['Oscar Wilde','Frank Zappa','Marcus Tullius Cicero','Mahatma Gandhi','Mark Twain']

const change = ()=>{
    let i = 0;
    let quote;
    let a;

    while(i < 5){
        let random = Math.floor(Math.random() * 5);
        quote = quotes[random];
        a = authors[random];
        i++;
    }

    text.textContent = `${quote}`;
    author.textContent = `${a}`;
    
}

button.addEventListener('click', change);