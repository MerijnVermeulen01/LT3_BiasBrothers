
    if(window.location.href.indexOf("codexBiases")> -1)
    {
    fetch('http://localhost:7070/codexBias')
        .then(repsone => repsone.json())
        .then(data => {
            console.log(data);
            data.forEach(post => {
                fillDiv(post.nameBias, post.description);
            })
        });
    }
    else if (window.location.href.indexOf("codexAdaptability")>-1){
        fetch('http://localhost:7070/codexAdaptability')
            .then(repsone => repsone.json())
            .then(data => {
                console.log(data);
                data.forEach(post => {
                    fillAdaptibility(post.title, post.description, post.trade);
                })
            });

    }
    else if (window.location.href.indexOf("codexThinkingTraps")>-1){
        fetch('http://localhost:7070/codexThinkingTraps')
            .then(repsone => repsone.json())
            .then(data => {
                console.log(data);
                data.forEach(post => {
                    fillDiv(post.thinkingTraps, post.description);
                })
            });

    }
    else if (window.location.href.indexOf("codexCognitiveBias")>-1){
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
    newDiv.classList.add("codexTitle");
    newDivText.classList.add("codexText");

    document.getElementById('codexBox').appendChild(newDiv);
}
    function fillAdaptibility(title, description, trade){
        var titleDiv = document.createElement("div");
        var cardTitle1 = document.createElement("div");
        var adaptDescription = document.createElement("div");
        var cardTitle2 = document.createElement("div");
        var adaptTrades = document.createElement("div");
        var adaptTrade = document.createElement("div");
        var h2 = document.createElement("h2");
        var h3 = document.createElement("h3");
        var titles = document.createTextNode(title);
        var description = document.createTextNode(description);
        var trades = document.createTextNode(trade);

        h2.appendChild(titles)
        titleDiv.appendChild(h2);
        h3.append("Hoe herken ik deze biases?");
        cardTitle1.appendChild(h3);
        adaptDescription.appendChild(description);
        h3.append("Hoe kan ik van fast naar slow thinking gaan?")
        cardTitle2.appendChild(h3);
        adaptTrade.appendChild(trades);

        titleDiv.classList.add('AdaptTitle');
        cardTitle1.classList.add('cardTitle');
        cardTitle2.classList.add('cardTitle');
        adaptDescription.classList.add('AdaptDescription');
        adaptTrades.classList.add('AdaptingTrades');
        adaptTrade.classList.add('adaptingTrade');

        document.getElementById('codexBoxAdapt').appendChild(titleDiv);
    }