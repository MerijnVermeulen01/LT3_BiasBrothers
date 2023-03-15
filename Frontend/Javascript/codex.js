const codex = document.querySelector('.codex'');

const div = document.createElement("div");
div.classList.add('codexTitel');
const text = "test";
const divContent=document.createTextNode(text);
div.appendChild(divContent);
document.body.appendChild(div);
