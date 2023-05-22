const startingMinutes = 10;
let time = startingMinutes*60;

const countDownEl = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds<10?'0'+seconds:seconds;

    countDownEl.innerHTML=`${minutes}:${seconds}`;
    if(time == 0){
        countDownEl.innerHTML='0:00';
    }
    else{
        time--;
    }
}