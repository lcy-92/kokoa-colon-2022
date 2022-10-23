const Clock = document.querySelector("h2#clock");



function GetClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0"); 
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    Clock.innerText =`${Hours}:${Minutes}:${Seconds}`;
    }
    

GetClock();
setInterval(GetClock, 1000);