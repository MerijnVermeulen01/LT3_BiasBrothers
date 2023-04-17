const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const edit = urlParams.get("edit");
const id = urlParams.get("id");
console.log(edit);
console.log(id);

if(edit == "true"){
    console.log("Hier moet een loading function komen met fetch");
    // Hier moet een fetch komen. Met de waardes ingevult met de ID die is meegegeven.
    // const table = document.querySelector("table");
    // const rowTitle = table.insertRow();
    // rowTitle.classList.add("trEditTitle");

    // const cell = rowTitle.insertCell();
    // cell.classList.add("editTitle");

    // const titleText = document.createTextNode("Titel:");
    // In de input moet wel iets van text komen als je gaat editen
    // const inputTitle = document.createElement("input");
    // inputTitle.classList.add("titleText");
    
    // const rowDescription = table.insertRow();
    
    // const cellDescription = rowDescription.insertCell();
    // cellDescription.classList.add("editDescription");

    // const descriptionText = document.createTextNode("Beschrijving:");
    // In de textarea moet wel iets van text komen als je gaat editen
    // const textareaDescription = document.createElement("textarea");
    // textareaDescription.classList.add("textarea1");

    // cell.appendChild(titleText);
    // cell.appendChild(inputTitle);

    // cellDescription.appendChild(descriptionText);
    // cellDescription.appendChild(textareaDescription);
}else{
    const table = document.querySelector("table");
    const rowTitle = table.insertRow();
    rowTitle.classList.add("trEditTitle");

    const cell = rowTitle.insertCell();
    cell.classList.add("editTitle");

    const titleText = document.createTextNode("Titel:");
    const inputTitle = document.createElement("input");
    inputTitle.classList.add("titleText");
    
    const rowDescription = table.insertRow();
    
    const cellDescription = rowDescription.insertCell();
    cellDescription.classList.add("editDescription");

    const descriptionText = document.createTextNode("Beschrijving:");
    const textareaDescription = document.createElement("textarea");
    textareaDescription.classList.add("textarea1");

    cell.appendChild(titleText);
    cell.appendChild(inputTitle);

    cellDescription.appendChild(descriptionText);
    cellDescription.appendChild(textareaDescription);

}