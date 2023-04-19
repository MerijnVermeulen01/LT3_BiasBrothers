let mountains = [
    { name: "Tunnelvisie", description: "Tunnelvisie beschrijving" },
    { name: "Denkvalkuilen", description: "Denkvalkuilen beschrijving" },
];

let count = 1;

function generateTable(table, data) {
    
    for (let element of data) {
        let row = table.insertRow();

        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            // if(count % 2 == 0){
            //     cell.classList.add("descriptionText");
            // } else {
            //     cell.classList.add("tableTitle");
            // }
            console.log(mountains[0].name);
            cell.appendChild(text);
        }
        const cellButton = row.insertCell();
        cellButton.classList.add("buttonArea");
        
        const editButton = document.createElement("a");
        editButton.href = "insertEditThinkingTraps.html?edit=true&id=" + count;
        const editTextButton = document.createTextNode("Edit");
        editButton.appendChild(editTextButton);


        const deleteButton = document.createElement("a");
        deleteButton.href = "delete.html?mode=thinkingtraps&id=" + count;
        const deleteTextButton = document.createTextNode("Delete");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.appendChild(deleteTextButton);
        
        cellButton.appendChild(editButton);
        cellButton.appendChild(deleteButton);
        count++;

    }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
