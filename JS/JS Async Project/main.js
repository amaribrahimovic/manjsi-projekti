const cityAndDate = document.querySelector('h1');
const temp = document.querySelector('h2');
const status = document.querySelector('h3');

window.addEventListener('load', async () => {
    try {
        const response = await fetch('info.json');
        const responseInfo = await response.json();

        if (response.status === 200) {
            cityAndDate.innerText = `${responseInfo[0].name}, ${responseInfo[0].date}`;
            temp.innerHTML = `${responseInfo[1].temperature} &#8451;`;
            status.innerText = `${responseInfo[2].status}`;
        } else {
            cityAndDate.innerText = 'Something went wrong';
        }
    } catch (err) {
        console.log(err);
    }
});
