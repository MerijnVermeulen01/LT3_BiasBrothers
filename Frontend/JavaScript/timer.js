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

const startingMinutes;
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
