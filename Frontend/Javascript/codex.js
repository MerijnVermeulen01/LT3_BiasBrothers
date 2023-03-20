
// const "name" = document.querySelector('"html where u want it"');
fetch('http://localhost:7070/Codex')
    .then(repsone => repsone.json())
    .then(data => {
        console.log(data);
        data.forEach(post => {
            fillDiv(post.nameBias,post.description);
            // "name".insertAdjacentHTML('beforeend', `"In which HTML tag u want it" ${post."point u want in the JSON"} "In which HTML tag u want it"`);
        })
    })
function fillDiv(title, desription) {
    var newDiv = document.createElement("div");
    var newDivText = document.createElement("div");
    var newH3 = document.createElement("h3");
    var titles = document.createTextNode(title);
    var text = document.createTextNode(desription);


    newH3.appendChild(titles);
    newDivText.appendChild(text);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newDivText);
    newDiv.classList.add("codexTitel");
    newDivText.classList.add("codexText");

    document.getElementById('codexBox').appendChild(newDiv);
}