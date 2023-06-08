const queryString = window.location.href;
let count = 1;
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
        console.log(data);
        let table = document.querySelector("table");
        generateTable(table, data);
    });
}

function generateTable(table, data) {
    
    for (let element of data) {
        if('idBiases' in element || 'idThinkingTraps' in element){
            console.log('data');
        }
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
        deleteButton.href = "delete.html?mode=" + deletePath + "&id=" + idName;
        const deleteTextButton = document.createTextNode("Delete");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.appendChild(deleteTextButton);
        
        cellButton.appendChild(editButton);
        cellButton.appendChild(deleteButton);
        count++;

    }
}
