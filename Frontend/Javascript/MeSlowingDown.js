/**
 * This is a array with all the descriptions from the meSlowingDownUser.
 */
var slowingDownDescriptions = ["", "", "", "", "", "", "", "", "", "", "", ""];

/**
 * This is a function to convert all the text to fit in the description Array
 */
function textToArray(textAreaId, paricipantText){
    if(textAreaId === "meSlowingDownSituationDescription1"){
        slowingDownDescriptions[0] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription2"){
        slowingDownDescriptions[1] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription3"){
        slowingDownDescriptions[2] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription4"){
        slowingDownDescriptions[3] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription5"){
        slowingDownDescriptions[4] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription6"){
        slowingDownDescriptions[5] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription7"){
        slowingDownDescriptions[6] = paricipantText;
    }else if(textAreaId === "meSlowingDownSituationDescription8") {
        slowingDownDescriptions[7] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription9"){
        slowingDownDescriptions[8] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription10"){
        slowingDownDescriptions[9] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription11"){
        slowingDownDescriptions[10] = paricipantText;
    } else if(textAreaId === "meSlowingDownSituationDescription12"){
        slowingDownDescriptions[11] = paricipantText;
    }
    console.log(slowingDownDescriptions);
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
            "meSlowingDownSituationDescription1" : slowingDownDescriptions[0],
            "meSlowingDownSituationDescription2" : slowingDownDescriptions[1],
            "meSlowingDownSituationDescription3" : slowingDownDescriptions[2],
            "meSlowingDownSituationDescription4" : slowingDownDescriptions[3],
            "meSlowingDownSituationDescription5" : slowingDownDescriptions[4],
            "meSlowingDownSituationDescription6" : slowingDownDescriptions[5],
            "meSlowingDownSituationDescription7" : slowingDownDescriptions[6],
            "meSlowingDownSituationDescription8" : slowingDownDescriptions[7],
            "meSlowingDownSituationDescription9" : slowingDownDescriptions[8],
            "meSlowingDownSituationDescription10" : slowingDownDescriptions[9],
            "meSlowingDownSituationDescription11" : slowingDownDescriptions[10],
            "meSlowingDownSituationDescription12" : slowingDownDescriptions[11],
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
fetch('http://localhost:7070/getParicipantMeSlowingDown')
    .then(repsone => repsone.json())
    .then(data => {
        document.getElementById('meSlowingDownSituationDescription1').value = data[0].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription2').value = data[1].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription3').value = data[2].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription4').value = data[3].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription5').value = data[4].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription6').value = data[5].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription7').value = data[6].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription8').value = data[7].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription9').value = data[8].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription10').value = data[9].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription11').value = data[10].slowingDownDescriptions;
        document.getElementById('meSlowingDownSituationDescription12').value = data[11].slowingDownDescriptions;
    });
