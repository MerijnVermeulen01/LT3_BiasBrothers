var clickedButton = [];
const pressedButtons = [];
const description = ["", "", ""];
const buttonContainer = document.getElementById('cardContainer');
const headers = [document.getElementById('textHeader1'), document.getElementById('textHeader2'), document.getElementById('textHeader3')];

    buttonContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.biasButton');
        if (pressedButtons.length <= 3) {
            if (button.classList.contains('activeButton')) {
                button.classList.remove('activeButton');

                const index = pressedButtons.indexOf(button);
                if (index > -1) {
                    pressedButtons.splice(index, 1);
                }
            } else if (pressedButtons.length >= 0 && pressedButtons.length < 3) {
                button.classList.add('activeButton');
                pressedButtons.push(button);
            }

            headers.forEach((header, index) => {
                header.innerHTML = pressedButtons[index] ? pressedButtons[index].innerHTML : "Selecteer een bias";
            });
        }
    });

function buttonToArray(clicked_id) {
    if (clickedButton.length <= 3) {
        const index = clickedButton.indexOf(clicked_id);
        if (index > -1) {
            clickedButton.splice(index, 1);
        } else if (clickedButton.length >= 0 && clickedButton.length < 3) {
            clickedButton.push(clicked_id);
        }
    }
}

function textToArray(textAreaId, paricipantText) {
    if (textAreaId === "description1") {
        description[0] = paricipantText;
    } else if (textAreaId === "description2") {
        description[1] = paricipantText;
    } else if (textAreaId === "description3") {
        description[2] = paricipantText;
    }
}

function valuesToJSON() {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/MyBiasParticipant";

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

    clickedButton[0] = document.getElementsByClassName("activeButton");
    clickedButton[1] = document.getElementsByClassName("activeButton");
    clickedButton[2] = document.getElementsByClassName("activeButton");

    // Converting JSON data to string
    var data = JSON.stringify({
        "button1": clickedButton[0],
        "description1": description[0],
        "button2": clickedButton[1],
        "description2": description[1],
        "button3": clickedButton[2],
        "description3": description[2],
    });
    console.log(data);
    // Sending data with the request
    xhr.send(data);

}

// A-synchronous version of method as seen above.
async function fetchData() {
    try {
        const response = await fetch('http://localhost:7070/joinedParticipantTraps');
        const data = await response.json();

        // Each iteration will wait for fillDiv to complete before moving to the next item.
        for (const item of data) {
            await fillDivCard(item.thinkingTraps, item.idThinkingTraps);
        }
    } catch (err) {
        console.error(err);
    }
}
fetchData();


// fetch('http://localhost:7070/joinedParticipantTraps')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('cardTitle1').innerHTML = data[0].thinkingTraps;
//         document.getElementById('cardTitle2').innerHTML = data[1].thinkingTraps;
//         document.getElementById('cardTitle3').innerHTML = data[2].thinkingTraps;
//     });

fetch('http://localhost:7070/getParicipantBias')
    .then(repsone => repsone.json())
    .then(data => {
        document.getElementById(data[0].bias_idBiases).classList.add('activeButton');
        document.getElementById(data[1].bias_idBiases).classList.add('activeButton');
        document.getElementById(data[2].bias_idBiases).classList.add('activeButton');
        document.getElementById('description1').value = data[0].description;
        document.getElementById('description2').value = data[1].description;
        document.getElementById('description3').value = data[2].description;
        headers[0].innerHTML = data[0].nameBias;
        headers[1].innerHTML = data[1].nameBias;
        headers[2].innerHTML = data[2].nameBias;
    });

// Makes cards with buttons filled with corresponding bias.
function fillDivCard(title, id) {
    var newDiv = document.createElement("div");
    var newH3 = document.createElement("h3");
    var titles = document.createTextNode(title);

    newDiv.classList.add('card');
    newH3.classList.add('header');

    newH3.appendChild(titles);
    newDiv.appendChild(newH3);
    document.getElementById('cardContainer').appendChild(newDiv);

    fetch('http://localhost:7070/getTrapBias/' + id)
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                var text = document.createTextNode(post.nameBias);
                var newButton = document.createElement("button");

                newButton.classList.add('biasButton');
                newButton.setAttribute("id", post.idBiases);

                newButton.appendChild(text);
                newDiv.appendChild(newButton);
            });
        });
}

// Not needed. For when cardText should be re-active.
function fillTextCard() {
    var newDiv = document.createElement("div");
    var newArea = document.createElement("textarea");
    var newH3 = document.createElement("h3");

    newH3.innerHTML = "Selecteer een bias"
    headers.push(newH3);

    newArea.placeholder = "[Beschrijf situatie(s) / voorbeeld(en) hier]"

    newDiv.classList.add('textCard');
    newArea.classList.add('biasText');
    newH3.classList.add('header');

    newDiv.appendChild(newH3);
    newDiv.appendChild(newArea);
    document.getElementById('cardInputContainer').appendChild(newDiv);
}
