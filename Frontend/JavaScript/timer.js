const queryString = window.location.href;
var alarmOn = new Boolean(false);
let times = [];
let biasTime;
let thinkingTime;
let possibilityTime;
let developmentTime;
let slowingTime;


if (queryString.includes("timerEdit")) {
  //check if in admin or in normal page
  fetchTimerEdit();
} else {
  fetch('http://localhost:7070/adminPortalTimer') //fetch timer info for seperate pages
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        chooseTimer(post.idtimer, post.timerName, post.timerTime); //brings timer info to selection of page
      });
    });
}

function chooseTimer(idtimer, timerName, timerTime) {
  //goes through multiple if statments to find out the page and set the time with the fetched time for the opened page
  if (queryString.includes("myBiasPage")) {
    if (timerName.includes("biasTime")) {
      runTimer(timerTime);
    }
  } else if (queryString.includes("thinkingTraps")) {
    if (timerName.includes("thinkingTime")) {
      runTimer(timerTime);
    }
  } else if (queryString.includes("selfDevelopment")) {
    if (timerName.includes("developmentTime")) {
      runTimer(timerTime);
    }
  } else if (queryString.includes("editPossibilitySlowingDown")) {
    if (timerName.includes("slowingTime")) {
      runTimer(timerTime);
    }
  } else if (queryString.includes("editPossibility")) {
    if (timerName.includes("possibilityTime")) {
      runTimer(timerTime);
    }
  }
}

function runTimer(timerTime) {
  //the timer with alarm
  const alarm = new Audio("/Frontend/Images/alarm2.wav"); //set audio

  const countDownEl = document.getElementById("timer");
  let time = timerTime * 60;
  var timerInterval;

    if (alarmOn == false) {                                             //makes sure the alarm only rings once
        timerInterval = setInterval(updateTimer, 1000)                  //interval of repeating the timer for 1000ms so 1 sec.
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


async function fetchTimerEdit() {
  //fetch for the admin page to see the timer times
  fetch("http://localhost:7070/adminPortalTimer")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        fillDiv(post.idtimer, post.timerName, post.timerTime);
      });
      document
        .getElementById("saveButton")
        .addEventListener("click", valuesToJSON(data));
    });
}

function fillDiv(idtimer, timerName, timerTime) {
  //gets the information of the timers to display the values on screen
  var time = document.createTextNode(timerTime);
  if (timerName.includes("biasTime")) {
    //if statements to set right time at right name
    document.getElementById("biasTime").appendChild(time);
  } else if (timerName.includes("thinkingTime")) {
    document.getElementById("thinkingTime").appendChild(time);
  } else if (timerName.includes("developmentTime")) {
    document.getElementById("developmentTime").appendChild(time);
  } else if (timerName.includes("possibilityTime")) {
    document.getElementById("possibilityTime").appendChild(time);
  } else if (timerName.includes("slowingTime")) {
    document.getElementById("slowingTime").appendChild(time);
  }
}

function minusOne(timeName) {
  //function to subtract by one from the given time
  if (timeName === "biasMinus") {
    //if statements to find the time that is being edited
    biasTime = document.getElementById("biasTime").innerHTML; //takes time value from within the html
    parseInt(biasTime); //parse set time to be an int so we can edit it
    biasTime--;
    times[0] = biasTime; //adds the new value to the times array in the corresponding spot to be sent with the JSON so the DB can be updated
    document.getElementById("biasTime").innerHTML = biasTime; //now set the new time in the html in the corresponding id
  } else if (timeName === "thinkingMinus") {
    thinkingTime = document.getElementById("thinkingTime").innerHTML;
    parseInt(thinkingTime);
    thinkingTime--;
    times[1] = thinkingTime;
    document.getElementById("thinkingTime").innerHTML = thinkingTime;
  } else if (timeName === "developmentMinus") {
    developmentTime = document.getElementById("developmentTime").innerHTML;
    parseInt(developmentTime);
    developmentTime--;
    times[2] = developmentTime;
    document.getElementById("developmentTime").innerHTML = developmentTime;
  } else if (timeName === "possibilityMinus") {
    possibilityTime = document.getElementById("possibilityTime").innerHTML;
    parseInt(possibilityTime);
    possibilityTime--;
    times[3] = possibilityTime;
    document.getElementById("possibilityTime").innerHTML = possibilityTime;
  } else if (timeName === "possibilitySlowMinus") {
    slowingTime = document.getElementById("slowingTime").innerHTML;
    parseInt(slowingTime);
    slowingTime--;
    times[4] = slowingTime;
    document.getElementById("slowingTime").innerHTML = slowingTime;
  }
}

function plusOne(timeName) {
  //function to subtract by one from the given time
  if (timeName === "biasPlus") {
    //if statements to find the time that is being edited
    biasTime = document.getElementById("biasTime").innerHTML; //takes time value from within the html
    parseInt(biasTime); //parse set time to be an int so we can edit it
    biasTime++;
    times[0] = biasTime; //adds the new value to the times array in the corresponding spot to be sent with the JSON so the DB can be updated
    document.getElementById("biasTime").innerHTML = biasTime; //now set the new time in the html in the corresponding id
  } else if (timeName === "thinkingPlus") {
    thinkingTime = document.getElementById("thinkingTime").innerHTML;
    parseInt(thinkingTime);
    thinkingTime++;
    times[1] = thinkingTime;
    document.getElementById("thinkingTime").innerHTML = thinkingTime;
  } else if (timeName === "developmentPlus") {
    developmentTime = document.getElementById("developmentTime").innerHTML;
    parseInt(developmentTime);
    developmentTime++;
    times[2] = developmentTime;
    document.getElementById("developmentTime").innerHTML = developmentTime;
  } else if (timeName === "possibilityPlus") {
    possibilityTime = document.getElementById("possibilityTime").innerHTML;
    parseInt(possibilityTime);
    possibilityTime++;
    times[3] = possibilityTime;
    document.getElementById("possibilityTime").innerHTML = possibilityTime;
  } else if (timeName === "possibilitySlowPlus") {
    slowingTime = document.getElementById("slowingTime").innerHTML;
    parseInt(slowingTime);
    slowingTime++;
    times[4] = slowingTime;
    document.getElementById("slowingTime").innerHTML = slowingTime;
  }
}

function valuesToJSON(data) {
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

  if (times.length != 0) {
    for (let i = 0; i < data.length; i++) {
      if (times[0] == null) {
        times[0] = data[0].timerTime;
      } else if (times[1] == null) {
        times[1] = data[1].timerTime;
      } else if (times[2] == null) {
        times[2] = data[2].timerTime;
      } else if (times[3] == null) {
        times[3] = data[3].timerTime;
      } else if (times[4] == null) {
        times[4] = data[4].timerTime;
      }
    }

    // Converting JSON data to string
    var data = JSON.stringify({
      biasTime: times[0],
      thinkingTime: times[1],
      developmentTime: times[2],
      possibilityTime: times[3],
      slowingTime: times[4],
    });
    console.log(data);
    // Sending data with the request
    xhr.send(data);
    location.reload();
  }
}
