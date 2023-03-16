const newDiv document.createElement("div");
const newDivText document.createElement("div");
const newH3 document.createElement("h3");


// const "name" = document.querySelector('"html where u want it"');
fetch('http://localhost:7070/MyBias')
    .then(repsone => repsone.json())
    .then(data => {
        data.forEach(post => {
            fillDiv(post.title,post.text);
            // "name".insertAdjacentHTML('beforeend', `"In which HTML tag u want it" ${post."point u want in the JSON"} "In which HTML tag u want it"`);
        })
    })
function fillDiv(title, text) {
    let titles = document.createTextNode(title);
    let text = document.createTextNode(text);

    newH3.appendChild(titles);
    newDivText.appendChild(text);

    docment.getElementById('codexBox').appendChild(newDiv);
}