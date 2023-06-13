const queryString = window.location.href;
if (queryString.includes("thinkingTrapsEdit")){
    fetchDataThinkingTraps();
}else if (queryString.includes("biasesEdit")){
    fetchDataBiases();
}

function fetchDataThinkingTraps(){
    fetch('http://localhost:7070/adminPortalThinkingTraps')
    .then(response => response.json())
    .then(data => {
    let table = document.querySelector("table");
        generateTable(table, data);
    });
}

function fetchDataBiases(){
    fetch('http://localhost:7070/adminPortalBias')
    .then(response => response.json())
    .then(data => {
        let table = document.querySelector("table");
        generateTable(table, data);
    });
}

function generateTable(table, data) {
    
    for (let element of data) {
        // if('idBiases' in element || 'idThinkingTraps' in element){
        //     console.log('data');
        // }
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            
            
            if(key == "description" || key == "biasDescription"){
                cell.classList.add("descriptionText");
            }else {
                cell.classList.add("tableTitle");
            }
            cell.appendChild(text);
        }
        const cellButton = row.insertCell();
        cellButton.classList.add("buttonArea");
        
        let fileNameEdit = "";
        let deletePath = "";

        let idName;
        if(queryString.includes("thinkingTrapsEdit")){
            fileNameEdit = "insertEditThinkingTraps";
            deletePath = "thinkingtraps";
            idName = element['idThinkingTraps'];
        }else if (queryString.includes("biasesEdit")){
            fileNameEdit = "insertEditBiases";
            deletePath = "biases";
            idName = element['idBiases'];
        }

        const editButton = document.createElement("a");
        editButton.href = fileNameEdit + ".html?edit=true&id=" + idName;
        const editTextButton = document.createTextNode("Edit");
        editButton.appendChild(editTextButton);


        const deleteButton = document.createElement("a");
        const deleteTextButton = document.createTextNode("Delete");
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.setAttribute("onclick", "popupTest("+idName+")");
        deleteButton.setAttribute("id", "deleteButton_" + idName);
        deleteButton.appendChild(deleteTextButton);
        
        cellButton.appendChild(editButton);
        cellButton.appendChild(deleteButton);

    }
}

function popupTest(id){
    let namingSpace = "";
    const queryString = window.location.href;
    if (queryString.includes("thinkingTrapsEdit")){
        namingSpace = "thinkingTrapsDelete";
    }else if (queryString.includes("biasesEdit")){
        namingSpace = "biasesDelete";
    }

    let response = confirm("Weet je zeker dat je het wilt verwijderen?");

    if(response){
        console.log("Ja is gedrukt");
    }else{
        console.log("Nee is gedrukt");
    }

    // if(response){
    //     valuesToJSON(namingSpace);
    // }else{
    //     return;
    // }
}

function valuesToJSON(namingSpacing) {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:7070/" + namingSpacing;

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