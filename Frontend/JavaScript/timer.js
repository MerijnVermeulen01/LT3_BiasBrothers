fetch('http://localhost:7070/Timer')
    .then(repsone => repsone.json())
    .then(data => {
        data.forEach(post => {
            fillDiv(post.biasTime, post.thinkingTime, post.developmentTime, post.possibilityTime);
        })
    });

function fillDiv(biasTime, thinkingTime, developmentTime, possibilityTime){
    document.getElementById('biasTime').appendChild(biasTime);
    document.getElementById('thinkingTime').appendChild(thinkingTime);
    document.getElementById('developmentTime').appendChild(developmentTime);
    document.getElementById('possibilityTime').appendChild(possibilityTime);
}

const startingMinutes = 1;
var alarmOn = new Boolean(false);
const alarm = new Audio('/Frontend/Images/alarm2.wav');
const countDownEl = document.getElementById('timer');
let time = startingMinutes*60;
var timerInterval = setInterval(updateTimer,1000)


if (alarmOn == false) {
  timerInterval
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    alarmOn = true;
    if (time == 0) {
        countDownEl.innerHTML = '0:00';
        countDownEl.classList.add('blink'); // add CSS class to make timer blink
        
        alarm.volume = 0.3; // Set the volume to 30%
        alarm.play();      // Start the alarm

        setTimeout(() => {
            alarm.pause(); // stop the alarm
        }, 1000);         //Set amount of tiume before alarm stops
        clearInterval(timerInterval)
    } else {
        time--;
    }
}
