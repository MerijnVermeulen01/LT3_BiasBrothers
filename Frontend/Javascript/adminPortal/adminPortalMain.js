let mountains = [
    { name: "TunnelVisie", description: "Tunnelvisie beschrijving", buttons: '<a href="insertEditBiases.html?edit=true&id=4">Edit</a><a id="deleteButton" href="delete.html">Delete</a>' },
    { name: "DenkValkuilen", description: "DenkValkuilen beschrijving", buttons: '<a href="insertEditBiases.html?edit=true&id=4">Edit</a><a id="deleteButton" href="delete.html">Delete</a>' },
    { name: "YEET", description: "YEET beschrijving", buttons: '<a href="insertEditBiases.html?edit=true&id=4">Edit</a><a id="deleteButton" href="delete.html">Delete</a>' },
  ];
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);