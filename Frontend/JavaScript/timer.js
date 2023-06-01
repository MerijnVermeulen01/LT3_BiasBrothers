const queryString = window.location.href;
let startingMinutes = 10;

if (queryString.includes("timerEdit")){
    fetchTimerEdit()
}
else{
    fetch('http://localhost:7070/adminPortalTimer')
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                chooseTimer(post.idtimer, post.timerName, post.timerTime);
            })
        });
}
function chooseTimer(idtimer,timerName,timerTime){
    if (queryString.includes("myBiasPage")){
        if (timerName.includes("biasTime")) {
            startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("thinkingTraps")){
        if (timerName.includes("thinkingTime")) {
            startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("editPossibility")){
        if (timerName.includes("possibilityTime")){
            startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("selfDevelopment")){
        if (timerName.includes("developmentTime")){
            startingMinutes = timerTime;
        }
    }
    runTimer();
}
function runTimer() {

    var alarmOn = new Boolean(false);
    const alarm = new Audio('/Frontend/Images/alarm2.wav');
    const countDownEl = document.getElementById('timer');
    let time = startingMinutes * 60;
    var timerInterval = setInterval(updateTimer, 1000)


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
}


function fetchTimerEdit() {
    fetch('http://localhost:7070/adminPortalTimer')
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                fillDiv(post.idtimer, post.timerName, post.timerTime);
            })
        });
}
function fillDiv(idtimer, timerName, timerTime){
    var time = document.createTextNode(timerTime+" minuten");
    if (timerName.includes("biasTime")){
        document.getElementById('biasTime').appendChild(time);
    }
    else if (timerName.includes("thinkingTime")){
        document.getElementById('thinkingTime').appendChild(time);
    }
    else if (timerName.includes("developmentTime")){
        document.getElementById('developmentTime').appendChild(time);
    }
    else if (timerName.includes("possibilityTime")){
        document.getElementById('possibilityTime').appendChild(time);
    }
}

