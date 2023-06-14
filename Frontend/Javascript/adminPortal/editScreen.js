const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const edit = urlParams.get("edit");
const id = urlParams.get("id");

if (edit == "true") {
    const queryString = window.location.href;
    let urlName;
    if (queryString.includes("insertEditThinkingTraps")) {
        urlName = "adminPortalThinkingTraps";
    } else if (queryString.includes("insertEditBiases")) {
        urlName = "adminPortalBias";
    }
    fetch('http://localhost:7070/' + urlName + '/' + id)
        .then(response => response.json())
        .then(data => {
            generateInputFields(data, queryString);
        });
} else {
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

function generateInputFields(data, queryString) {
    for (let element of data) {

        let titleName;
        let description;
        if (queryString.includes("insertEditThinkingTraps")) {
            description = element['description'];
            titleName = element['thinkingTraps'];
        } else if (queryString.includes("insertEditBiases")) {
            description = element['biasDescription'];
            titleName = element['nameBias'];
        }

        console.log(element);
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
        const descriptionInputText = document.createTextNode(description);
        textareaDescription.classList.add("textarea1");

        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('value', titleName);
        textareaDescription.append(descriptionInputText);

        cell.appendChild(titleText);
        cell.appendChild(inputTitle);

        cellDescription.appendChild(descriptionText);
        cellDescription.appendChild(textareaDescription);
    }
}