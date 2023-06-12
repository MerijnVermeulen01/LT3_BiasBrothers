var writeButton = ["", "", "", "", "", ""];
var description = ["", "", ""];

function textToArray(textAreaId, paricipantText) {
    if (textAreaId === "writeArea1") {
        description[0] = paricipantText;
    } else if (textAreaId === "writeArea2") {
        description[1] = paricipantText;
    } else if (textAreaId === "writeArea3") {
        description[2] = paricipantText;
    }
}


function buttonTextToArray(textAreaId, paricipantText) {
    if (textAreaId === "buttonWrite1") {
        writeButton[0] = paricipantText;
    } else if (textAreaId === "buttonWrite2") {
        writeButton[1] = paricipantText;
    } else if (textAreaId === "buttonWrite3") {
        writeButton[2] = paricipantText;
    } else if (textAreaId === "buttonWrite4") {
        writeButton[3] = paricipantText;
    } else if (textAreaId === "buttonWrite5") {
        writeButton[4] = paricipantText;
    } else if (textAreaId === "buttonWrite6") {
        writeButton[5] = paricipantText;
    }
}

function valuesToJSON() {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/selfDevToBackend";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Request completed successfully
            console.log(this.responseText);

            // Redirect to the next HTML page
            window.location.href = "nextPage.html";
        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({
        "writeButton1": writeButton[0],
        "writeButton2": writeButton[1],
        "writeButton3": writeButton[2],
        "writeButton4": writeButton[3],
        "writeButton5": writeButton[4],
        "writeButton6": writeButton[5],
        "description1": description[0],
        "description2": description[1],
        "description3": description[2],
    });

    // Sending data with the request
    xhr.send(data);

}


fetch('http://localhost:7070/selfDevelopment')
    .then(response => response.json())
    .then(data => {
        // document.getElementById('buttonWrite1').classList.add('activeButton');
        // document.getElementById('buttonWrite2').classList.add('activeButton');
        // document.getElementById('buttonWrite3').classList.add('activeButton');
        document.getElementById('buttonWrite1').value = data[0].selfDevelopment;
        document.getElementById('buttonWrite2').value = data[1].selfDevelopment;
        document.getElementById('buttonWrite3').value = data[2].selfDevelopment;
        document.getElementById('writeArea1').value = data[0].description;
        document.getElementById('writeArea2').value = data[1].description;
        document.getElementById('writeArea3').value = data[2].description;
    });
