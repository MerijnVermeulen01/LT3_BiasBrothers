const queryString = window.location.href;
var alarmOn = new Boolean(false);

if (queryString.includes("timerEdit")){     //check if in admin or in normal page
    fetchTimerEdit()
}
else{
    fetch('http://localhost:7070/adminPortalTimer')         //fetch timer info for seperate pages
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                chooseTimer(post.idtimer, post.timerName, post.timerTime);              //brings timer info to selection of page
            })
        });
}
function chooseTimer(idtimer,timerName,timerTime){          //goes through multiple if statments to infd out the page and set the time with the fetched time for the opened page
    if (queryString.includes("myBiasPage")){
        if (timerName.includes("biasTime")) {
            runTimer(timerTime);
            //startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("thinkingTraps")){
        if (timerName.includes("thinkingTime")) {
            runTimer(timerTime);
            //startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("editPossibility")){
        if (timerName.includes("possibilityTime")){
            runTimer(timerTime);
            //startingMinutes = timerTime;
        }
    }
    else if (queryString.includes("selfDevelopment")){
        if (timerName.includes("developmentTime")){
            runTimer(timerTime);
            //startingMinutes = timerTime;
        }
    }
}
function runTimer(timerTime) {                               //the timer with alarm
    const alarm = new Audio('/Frontend/Images/alarm2.wav');         //set audio
    const countDownEl = document.getElementById('timer');
    let time = timerTime * 60;
    var timerInterval;

    if (alarmOn == false) {                                             //makes sure the alarm only rings once
       timerInterval = setInterval(updateTimer, 1000)                  //interval of repeating the timer for 1000ms so 1 sec.
    }

    function updateTimer() {                            //function that makes the timer tick
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


function fetchTimerEdit() {                                     //fetch for the admin page to see the timer times
    fetch('http://localhost:7070/adminPortalTimer')
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                fillDiv(post.idtimer, post.timerName, post.timerTime);
            })
        });
}
function fillDiv(idtimer, timerName, timerTime){                        //gets the information of the timers to display the values on screen
    var time = document.createTextNode(timerTime+" minuten");
    if (timerName.includes("biasTime")){                                   //if statements to set right time at right name
        document.getElementById('biasTime').appendChild(time);
    } else if (timerName.includes("thinkingTime")) {
        document.getElementById('thinkingTime').appendChild(time);
    } else if (timerName.includes("developmentTime")) {
        document.getElementById('developmentTime').appendChild(time);
    } else if (timerName.includes("possibilityTime")) {
        document.getElementById('possibilityTime').appendChild(time);
    }
}

