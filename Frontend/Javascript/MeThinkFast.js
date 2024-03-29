/**
 * This is a array with all the descriptions from the meThinkFastUser.
 */
var description = ["", "", "", "", "", "", "", "", "", "", "", ""];

/**
 * This is a function to convert all the text to fit in the description Array
 */
function textToArray(textAreaId, participantText) {
  if (textAreaId === "situationDescription1") {
    description[0] = participantText;
  } else if (textAreaId === "situationDescription2") {
    description[1] = participantText;
  } else if (textAreaId === "situationDescription3") {
    description[2] = participantText;
  } else if (textAreaId === "situationDescription4") {
    description[3] = participantText;
  } else if (textAreaId === "situationDescription5") {
    description[4] = participantText;
  } else if (textAreaId === "situationDescription6") {
    description[5] = participantText;
  } else if (textAreaId === "situationDescription7") {
    description[6] = participantText;
  } else if (textAreaId === "situationDescription8") {
    description[7] = participantText;
  } else if (textAreaId === "situationDescription9") {
    description[8] = participantText;
  } else if (textAreaId === "situationDescription10") {
    description[9] = participantText;
  } else if (textAreaId === "situationDescription11") {
    description[10] = participantText;
  } else if (textAreaId === "situationDescription12") {
    description[11] = participantText;
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
      situationDescription1: description[0],
      situationDescription2: description[1],
      situationDescription3: description[2],
      situationDescription4: description[3],
      situationDescription5: description[4],
      situationDescription6: description[5],
      situationDescription7: description[6],
      situationDescription8: description[7],
      situationDescription9: description[8],
      situationDescription10: description[9],
      situationDescription11: description[10],
      situationDescription12: description[11],
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
fetch("http://localhost:7070/getParticipantMeThinkFast")
  .then((repsone) => repsone.json())
  .then((data) => {
    document.getElementById("situationDescription1").value =
      data[0].description;
    document.getElementById("situationDescription2").value =
      data[1].description;
    document.getElementById("situationDescription3").value =
      data[2].description;
    document.getElementById("situationDescription4").value =
      data[3].description;
    document.getElementById("situationDescription5").value =
      data[4].description;
    document.getElementById("situationDescription6").value =
      data[5].description;
    document.getElementById("situationDescription7").value =
      data[6].description;
    document.getElementById("situationDescription8").value =
      data[7].description;
    document.getElementById("situationDescription9").value =
      data[8].description;
    document.getElementById("situationDescription10").value =
      data[9].description;
    document.getElementById("situationDescription11").value =
      data[10].description;
    document.getElementById("situationDescription12").value =
      data[11].description;
  });
