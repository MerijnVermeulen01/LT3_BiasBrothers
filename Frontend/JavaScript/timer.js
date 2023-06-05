const queryString = window.location.href;
let startingMinutes = 10;           //starting value for timer

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
function runTimer() {                               //the timer with alarm

    var alarmOn = new Boolean(false);
    const alarm = new Audio('/Frontend/Images/alarm2.wav');         //set audio
    const countDownEl = document.getElementById('timer');
    let time = startingMinutes * 60;
    var timerInterval = setInterval(updateTimer, 1000)                  //interval of repeating the timer for 1000ms so 1 sec.


    if (alarmOn == false) {                                             //makes sure the alarm only rings once
        timerInterval
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

function valuesToJSON() {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/timer";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            console.log(this.responseText);

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({
        "biasTime": biasTime[0],
        "thinkingtime": thinkingtime[0],
        "possibilityTime": possibilityTime[1],
        "developmentTime": developmentTime[1],
    });
    console.log(data);
    // Sending data with the request
    xhr.send(data);

}