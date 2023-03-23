function valuesToJSON(){  
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/Sessions";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({ 
        "button1" : clickedButton[0],
        "description1" : description[0],
        "button2" : clickedButton[1],
        "description2" : description[1],
        "button3" : clickedButton[2],
        "description3" : description[2], 
    });

    xhr.send(data);
}