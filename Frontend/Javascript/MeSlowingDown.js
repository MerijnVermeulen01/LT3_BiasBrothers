/**
 * This is a array with all the descriptions from the meSlowingDownUser.
 */
var description = ["", "", "", "", "", "", "", "", "", "", "", ""];

/**
 * This is a function to convert all the text to fit in the description Array
 */
function textToArray(textAreaId, paricipantText){
    if(textAreaId === "meSlowingDownSituationDescription1"){
        description[0] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription2"){
        description[1] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription3"){
        description[2] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription4"){
        description[3] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription5"){
        description[4] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription6"){
        description[5] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription7"){
        description[6] = paricipantText;
    }else if(textAreaId === "meSlowingDownSituationDescription8") {
        description[7] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription9"){
        description[8] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription10"){
        description[9] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription11"){
        description[10] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription12"){
        description[11] = paricipantText;
    }
    console.log(description);
}


/**
 * This is a function to convert the userData to Json format
 */
function valuesToJSON() {
    try {
        // Creating a XHR object
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:7070/MeSlowingDownPost";

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
            "meSlowingDownSituationDescription1" : description[0],
            "meSlowingDownSituationDescription2" : description[1],
            "meSlowingDownSituationDescription3" : description[2],
            "meSlowingDownSituationDescription4" : description[3],
            "meSlowingDownSituationDescription5" : description[4],
            "meSlowingDownSituationDescription6" : description[5],
            "meSlowingDownSituationDescription7" : description[6],
            "meSlowingDownSituationDescription8" : description[7],
            "meSlowingDownSituationDescription9" : description[8],
            "meSlowingDownSituationDescription10" : description[9],
            "meSlowingDownSituationDescription11" : description[10],
            "meSlowingDownSituationDescription12" : description[11],
        });
        console.log(data);
        // Sending data with the request
        xhr.send(data);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

/**
 * This is a fetch funtion to collect the data from the database
 */
fetch('http://localhost:7070/getParticipantMeSlowingDown')
    .then(repsone => repsone.json())
    .then(data => {
        console.log(data[0]);
        document.getElementById('meSlowingDownSituationDescription1').value = data[0].description;
        document.getElementById('meSlowingDownSituationDescription2').value = data[1].description;
        document.getElementById('meSlowingDownSituationDescription3').value = data[2].description;
        document.getElementById('meSlowingDownSituationDescription4').value = data[3].description;
        document.getElementById('meSlowingDownSituationDescription5').value = data[4].description;
        document.getElementById('meSlowingDownSituationDescription6').value = data[5].description;
        document.getElementById('meSlowingDownSituationDescription7').value = data[6].description;
        document.getElementById('meSlowingDownSituationDescription8').value = data[7].description;
        document.getElementById('meSlowingDownSituationDescription9').value = data[8].description;
        document.getElementById('meSlowingDownSituationDescription10').value = data[9].description;
        document.getElementById('meSlowingDownSituationDescription11').value = data[10].description;
        document.getElementById('meSlowingDownSituationDescription12').value = data[11].description;
    });
