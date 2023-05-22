const startingMinutes = 0.1;
var alarmOn = new Boolean(false);
const alarm = new Audio('/Frontend/Images/alarm2.wav');
const countDownEl = document.getElementById('timer');
let time = startingMinutes*60;
var Stink = setInterval(updateTimer,1000)


if (alarmOn == false) {
  Stink
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    alarmOn = true;
    if (time == 0) {
        countDownEl.innerHTML = '0:00';
        countDownEl.classList.add('blink');
        
        alarm.volume = 0.3; // Set the volume to 30%
        alarm.play();

        setTimeout(() => {
            alarm.pause();
        }, 1000);
        clearInterval(Stink)
    } else {
        time--;
    }
}