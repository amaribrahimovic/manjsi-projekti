const btn = document.querySelector('button');
const body = document.querySelector('body');

const subscription = ()=>{
    const subscriptionDiv = document.createElement('div')
    subscriptionDiv.classList.add('subs');
    subscriptionDiv.innerHTML = `
        <h1>Subscribe now!</h1>
        <p>Use our gym subcription to achive your goals and build the body of your dreams!</p>
        <form netlify>
            Full Name <br><input type="text">
            <br>
            Phone number <br> <input type="text">
            <br>
            E-mail <br> <input type="text">
            <input type="submit">
        </form>
    `;
    body.appendChild(subscriptionDiv);
}

btn.addEventListener('click', subscription);