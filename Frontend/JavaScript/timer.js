const queryString = window.location.href;
let startingMinutes = 10;                                                    //starting value for timer
var times = [];
if (queryString.includes("timerEdit")) {                                     //check if in admin or in normal page
    fetchTimerEdit()
} else {
    fetch('http://localhost:7070/adminPortalTimer')                    //fetch timer info for seperate pages
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                chooseTimer(post.idtimer, post.timerName, post.timerTime);   //brings timer info to selection of page
            })
        });
}

function chooseTimer(idtimer, timerName, timerTime) {                        //goes through multiple if statments to infd out the page and set the time with the fetched time for the opened page
    if (queryString.includes("myBiasPage")) {
        if (timerName.includes("biasTime")) {
            startingMinutes = timerTime;
        }
    } else if (queryString.includes("thinkingTraps")) {
        if (timerName.includes("thinkingTime")) {
            startingMinutes = timerTime;
        }
    } else if (queryString.includes("editPossibility")) {
        if (timerName.includes("possibilityTime")) {
            startingMinutes = timerTime;
        }
    } else if (queryString.includes("selfDevelopment")) {
        if (timerName.includes("developmentTime")) {
            startingMinutes = timerTime;
        }
    }
    runTimer();
}

function runTimer() {                                                        //the timer with alarm

    var alarmOn = new Boolean(false);
    const alarm = new Audio('/Frontend/Images/alarm2.wav');              //set audio
    const countDownEl = document.getElementById('timer');
    let time = startingMinutes * 60;
    var timerInterval = setInterval(updateTimer, 1000)                  //interval of repeating the timer for 1000ms so 1 sec.


    if (alarmOn == false) {                                                  //makes sure the alarm only rings once
        timerInterval
    }

    function updateTimer() {                                                 //function that makes the timer tick
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countDownEl.innerHTML = `${minutes}:${seconds}`;
        alarmOn = true;
        if (time == 0) {
            countDownEl.innerHTML = '0:00';
            countDownEl.classList.add('blink');                              // add CSS class to make timer blink

            alarm.volume = 0.3;                                              // Set the volume to 30%
            alarm.play();                                                    // Start the alarm

            setTimeout(() => {
                alarm.pause();                                               // stop the alarm
            }, 1000);                                                 //Set amount of tiume before alarm stops
            clearInterval(timerInterval)
        } else {
            time--;
        }
    }
}


function fetchTimerEdit() {                                                  //fetch for the admin page to see the timer times
    fetch('http://localhost:7070/adminPortalTimer')
        .then(repsone => repsone.json())
        .then(data => {
            data.forEach(post => {
                fillDiv(post.idtimer, post.timerName, post.timerTime);
            })
        });
}

function fillDiv(idtimer, timerName, timerTime) {                            //gets the information of the timers to display the values on screen
    var time = document.createTextNode(timerTime);
    if (timerName.includes("biasTime")) {                                    //if statements to set right time at right name
        document.getElementById('biasTime').appendChild(time);
    } else if (timerName.includes("thinkingTime")) {
        document.getElementById('thinkingTime').appendChild(time);
    } else if (timerName.includes("developmentTime")) {
        document.getElementById('developmentTime').appendChild(time);
    } else if (timerName.includes("possibilityTime")) {
        document.getElementById('possibilityTime').appendChild(time);
    }
}

function minusOne(timeName) {                                                         //function to subtract by one from the given time
    if (timeName == "biasMinus") {                                                   //if statements to find the time that is being edited
        biasTime = document.getElementById('biasTime').innerHTML;           //takes time value from within the html
        parseInt(biasTime);                                                          //parse set time to be an int so we can edit it
        biasTime--;
        document.getElementById('biasTime').innerHTML = biasTime;           //now set the new time in the html in the corresponding id
    } else if (timeName == "thinkingMinus") {
        thinkingTime = document.getElementById('thinkingTime').innerHTML;
        parseInt(thinkingTime);
        thinkingTime--;
        document.getElementById('thinkingTime').innerHTML = thinkingTime;
    } else if (timeName == 'possibilityMinus') {
        possibilityTime = document.getElementById('possibilityTime').innerHTML;
        parseInt(possibilityTime);
        possibilityTime--;
        document.getElementById('possibilityTime').innerHTML = possibilityTime;
    } else if (timeName == 'developmentMinus') {
        developmentTime = document.getElementById('developmentTime').innerHTML;
        parseInt(developmentTime);
        developmentTime--;
        document.getElementById('developmentTime').innerHTML = developmentTime;
    }
}

function plusOne(timeName) {                                                         //function to subtract by one from the given time
    if (timeName == "biasPlus") {                                                   //if statements to find the time that is being edited
        biasTime = document.getElementById('biasTime').innerHTML;           //takes time value from within the html
        parseInt(biasTime);                                                          //parse set time to be an int so we can edit it
        biasTime++;
        document.getElementById('biasTime').innerHTML = biasTime;           //now set the new time in the html in the corresponding id
    } else if (timeName == "thinkingPlus") {
        thinkingTime = document.getElementById('thinkingTime').innerHTML;
        parseInt(thinkingTime);
        thinkingTime++;
        document.getElementById('thinkingTime').innerHTML = thinkingTime;
    } else if (timeName == 'possibilityPlus') {
        possibilityTime = document.getElementById('possibilityTime').innerHTML;
        parseInt(possibilityTime);
        possibilityTime++;
        document.getElementById('possibilityTime').innerHTML = possibilityTime;
    } else if (timeName == 'developmentPlus') {
        developmentTime = document.getElementById('developmentTime').innerHTML;
        parseInt(developmentTime);
        developmentTime++;
        document.getElementById('developmentTime').innerHTML = developmentTime;
    }
}


// function timesToArray(timeId) {     //set the times in an array to be put in a JSON that'll send them to update the DB
//     if (timeId === "biasTime") {
//         biasTime[0] = biasTime;
//     } else if (timeId === "thinkingTime") {
//         thinkingTime[1] = thinkingTime;
//     } else if (timeId === "possibilityTime") {
//         possibilityTime[2] = possibilityTime;
//     } else if (timeId === "developmentTime"){
//         developmentTime[3] = developmentTime;
//     }
// }
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
    times[0] = document.getElementById('biasTime').innerHTML;
    times[1] = document.getElementById('thinkingTime').innerHTML;
    times[2] = document.getElementById('possibilityTime').innerHTML;
    times[3] = document.getElementById('developmentTime').innerHTML;
    // Converting JSON data to string
    var data = JSON.stringify({
        "biasTime": times[0],
        "thinkingTime": times[1],
        "possibilityTime": times[2],
        "developmentTime": times[3],
    });
    console.log(data);
    // Sending data with the request
    xhr.send(data);

}