
    if(window.location.href.indexOf("codexBiases")> -1)
    {
    fetch('http://localhost:7070/Codex')
        .then(repsone => repsone.json())
        .then(data => {
            console.log(data);
            data.forEach(post => {
                fillDiv(post.nameBias, post.description);
            })
        });
    }
    else if (window.location.href.indexOf("codexAanpassingsvermogen")>-1){
        console.log("wauw");

    }
    else if (window.location.href.indexOf("codex")>-1){
        fetch('http://localhost:7070/Codex')
            .then(repsone => repsone.json())
            .then(data => {
                console.log(data);
                data.forEach(post => {
                    fillDiv(post.thinkingTraps, post.description);
                })
            });

    }
    else if (window.location.href.indexOf("codexCognitieveBias")>-1){
        console.log("wew");
    }
    else{
        console.log("bad juju")
    }

function fillDiv(title, desription) {
    var newDiv = document.createElement("div");
    var newDivText = document.createElement("div");
    var newH3 = document.createElement("h3");
    var titles = document.createTextNode(title);
    var text = document.createTextNode(desription);


    newH3.appendChild(titles);
    newDivText.appendChild(text);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newDivText);
    newDiv.classList.add("codexTitel");
    newDivText.classList.add("codexText");

    document.getElementById('codexBox').appendChild(newDiv);
}