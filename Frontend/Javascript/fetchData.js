var clickedButton = [];
var description = ["", "", ""];

function textToArray(textAreaId, paricipantText){
    if(textAreaId === "description1"){
        description[0] = paricipantText;
    } else if(textAreaId === "description2"){
        description[1] = paricipantText;
    } else if(textAreaId === "description3"){
        description[2] = paricipantText;
    }
}

// function buttonToArray(clicked_id) {
//     if(clickedButton.length <= 3){
//             const index = clickedButton.indexOf(clicked_id);
//             if (index > -1) {
//                 clickedButton.splice(index, 1);
//             }
//
//         else if (clickedButton.length >= 0 && clickedButton.length < 3) {
//             clickedButton.push(clicked_id);
//         }
//     }
// }

function valuesToJSON(){  
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/MyThinkingTraps";

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
        "button1" : clickedButton[0],
        "description1" : description[0],
        "button2" : clickedButton[1],
        "description2" : description[1],
        "button3" : clickedButton[2],
        "description3" : description[2], 
    });

    console.log(data);
    // Sending data with the request
    xhr.send(data);

}


fetch('http://localhost:7070/getParicipantTraps')
    .then(response => response.json())
    .then(data => {
        // console.log();
        document.getElementById(data[0].thinkingtraps_idThinkingTraps).classList.add('activeButton');
        document.getElementById(data[1].thinkingtraps_idThinkingTraps).classList.add('activeButton');
        document.getElementById(data[2].thinkingtraps_idThinkingTraps).classList.add('activeButton');
        document.getElementById('description1').value = data[0].description;
        document.getElementById('description2').value = data[1].description;
        document.getElementById('description3').value = data[2].description;
    });
