var description = ["", "", "", "", "", "", "", "", "", "", "", ""];

function textToArray(textAreaId, paricipantText){
    if(textAreaId === "situationDescription1"){
        description[0] = paricipantText;
    } else if (textAreaId === "situationDescription2") {
        description[1] = paricipantText;
    } else if (textAreaId === "situationDescription3") {
        description[2] = paricipantText;
    } else if (textAreaId === "situationDescription4") {
        description[3] = paricipantText;
    } else if (textAreaId === "situationDescription5") {
        description[4] = paricipantText;
    } else if (textAreaId === "situationDescription6") {
        description[5] = paricipantText;
    } else if (textAreaId === "situationDescription7") {
        description[6] = paricipantText;
    }else if(textAreaId === "situationDescription8") {
        description[7] = paricipantText;
    } else if(textAreaId === "situationDescription9"){
        description[8] = paricipantText;
    } else if(textAreaId === "situationDescription10"){
        description[9] = paricipantText;
    } else if(textAreaId === "situationDescription11"){
        description[10] = paricipantText;
    } else if(textAreaId === "situationDescription12"){
        description[11] = paricipantText;
    }
}


function valuesToJSON() {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/MeThinkingFastPost";

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
        "situationDescription1": description[0],
        "situationDescription2": description[1],
        "situationDescription3": description[2],
        "situationDescription4": description[3],
        "situationDescription5": description[4],
        "situationDescription6": description[5],
        "situationDescription7": description[6],
        "situationDescription8": description[7],
        "situationDescription9": description[8],
        "situationDescription10": description[9],
        "situationDescription11": description[10],
        "situationDescription12": description[11],
    });
    console.log(data);
    // Sending data with the request
    xhr.send(data);

}


fetch('http://localhost:7070/getParicipantMeThinkFast')
    .then(repsone => repsone.json())
    .then(data => {
        document.getElementById('situationDescription1').value = data[0].description;
        document.getElementById('situationDescription2').value = data[1].description;
        document.getElementById('situationDescription3').value = data[2].description;
        document.getElementById('situationDescription4').value = data[3].description;
        document.getElementById('situationDescription5').value = data[4].description;
        document.getElementById('situationDescription6').value = data[5].description;
        document.getElementById('situationDescription7').value = data[6].description;
        document.getElementById('situationDescription8').value = data[7].description;
        document.getElementById('situationDescription9').value = data[8].description;
        document.getElementById('situationDescription10').value = data[9].description;
        document.getElementById('situationDescription11').value = data[10].description;
        document.getElementById('situationDescription12').value = data[11].description;
    });
