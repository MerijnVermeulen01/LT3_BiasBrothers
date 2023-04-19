const queryString = window.location.href;
let count = 1;
if (queryString.includes("thinkingTrapsEdit")){
    fetchDataThinkingTraps();
}else if (queryString.includes("biasesEdit")){
    fetchDataBiases();
}

function fetchDataThinkingTraps(){
    // fetch('http://localhost:7070/')
    // .then(repsone => repsone.json())
    // .then(data => {
    // let table = document.querySelector("table");
    //     generateTable(table, data);
    // });
}

function fetchDataBiases(){
    // fetch('http://localhost:7070/')
    // .then(repsone => repsone.json())
    // .then(data => {
    // let table = document.querySelector("table");
    //     generateTable(table, data);
    // });
}

function generateTable(table, data) {
    
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);

            if(key == "description"){
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

        if(queryString.includes("thinkingTrapsEdit")){
            fileNameEdit = "insertEditThinkingTraps";
            deletePath = "thinkingtraps";
        }else if (queryString.includes("biasesEdit")){
            fileNameEdit = "insertEditBiases";
            deletePath = "biases";
        }
        const editButton = document.createElement("a");
        editButton.href = fileNameEdit + ".html?edit=true&id=" + count;
        const editTextButton = document.createTextNode("Edit");
        editButton.appendChild(editTextButton);


        const deleteButton = document.createElement("a");
        deleteButton.href = "delete.html?mode=" + deletePath + "&id=" + count;
        const deleteTextButton = document.createTextNode("Delete");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.appendChild(deleteTextButton);
        
        cellButton.appendChild(editButton);
        cellButton.appendChild(deleteButton);
        count++;

    }
}
