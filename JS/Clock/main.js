const clock = document.querySelector('h1');


    
 setInterval(()=>{
        const timezone = new Date().toLocaleString();
        const timeZoneString = timezone.split(",", 2);
        console.log(timeZoneString);
        
        clock.innerHTML = `${timeZoneString[1]} <br> ${timeZoneString[0]}`;
    }, 1000);