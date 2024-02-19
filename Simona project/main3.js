const tacka = document.querySelector('#tacka');

localStorage.setItem("count", 0);

tacka.addEventListener('click', ()=>{
    window.location.href = './vprasanja/vprasanje1.html'
});