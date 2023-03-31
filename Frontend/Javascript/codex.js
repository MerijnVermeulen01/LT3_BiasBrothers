
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
                    fillAdaptibility(post.title, post.description, post.trade1, post.trade2, post.trade3);
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
    function fillAdaptibility(title, description, trade1, trade2, trade3){
        var titleDiv = document.createElement("div");
        var cardTitle1 = document.createElement("div");
        var adaptDescription = document.createElement("div");
        var cardTitle2 = document.createElement("div");
        var adaptTrades = document.createElement("div");
        var adaptTrade1 = document.createElement("div");
        var adaptTrade2 = document.createElement("div");
        var adaptTrade3 = document.createElement("div");
        var h2 = document.createElement("h2");
        var card1 = document.createElement("h3");
        var card2 = document.createElement("h3");
        var titles = document.createTextNode(title);
        var description = document.createTextNode(description);

        h2.appendChild(titles)
        card1.append("Hoe herken ik deze biases?");
        card2.append("Hoe kan ik van fast naar slow thinking gaan?")


        titleDiv.appendChild(h2);
        titleDiv.appendChild(cardTitle1);
        titleDiv.appendChild(adaptDescription);
        titleDiv.appendChild(cardTitle2);
        titleDiv.appendChild(adaptTrades);

        cardTitle1.appendChild(card1);
        cardTitle2.appendChild(card2);
        adaptDescription.appendChild(description);
        adaptTrades.appendChild(adaptTrade1);
        adaptTrades.appendChild(adaptTrade2);
        adaptTrades.appendChild(adaptTrade3);
        adaptTrade1.append(trade1);
        adaptTrade2.append(trade2);
        adaptTrade3.append(trade3);

        titleDiv.classList.add('AdaptTitle');
        cardTitle1.classList.add('cardTitle');
        cardTitle2.classList.add('cardTitle');
        adaptDescription.classList.add('AdaptDescription');
        adaptTrades.classList.add('AdaptingTrades');
        adaptTrade1.classList.add('adaptingTrade');
        adaptTrade2.classList.add('adaptingTrade');
        adaptTrade3.classList.add('adaptingTrade');

        document.getElementById('codexBoxAdapt').appendChild(titleDiv);
    }