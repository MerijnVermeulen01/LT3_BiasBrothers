// This function makes the sidebar.
function sidebarLoad(){

    // This piece of code makes the sidebar with HTML
    document.write(
        "<nav>\
            <ul>\
                <li><img scr='Images/BiasBrothers.png'></li>\
                <li id='ontwikkelActies'><a href='ontwikkelActies.html'>Ontwikkelacties</a></li>\
                <li id='denkvalkuilen'><a href='denkvalkuilen.html'>Denkvalkuilen</a></li>\
                <li id='mijnBiasesPagina'><a href='mijnBiasesPagina.html'>Mijn Biases</a></li>\
                <li id='aanpassingsvermogen'><a href='aanpassingsvermogen.html'>Aanpassingsvermogen</a></li>\
                <li id='codex'><a href='codex.html'>Codex</a></li>\
                <li id='downloadGegevensPagina'><a href='downloadGegevensPagina.html'>Download gegevens</a></li>\
            </ul>\
        </nav>"
    );


    // This code removes the class active form all of the childern in the div sidebarContainer
    const elements = document.querySelectorAll("#sidebarContainer *");

    elements.forEach((element) =>{
        element.classList.remove("active");
    });


    // This code looks at which page you are and then adds the class active to it
    // TODO: IF STATEMENT TO SWITCH STATEMENT
    const queryStrin = window.location.href;
    if (queryStrin.includes("ontwikkelActies")){
        document.getElementById("ontwikkelActies").classList.add("active");
    } else if (queryStrin.includes("denkvalkuilen")){
        document.getElementById("denkvalkuilen").classList.add("active");
    } else if (queryStrin.includes("mijnBiasesPagina")){
        document.getElementById("mijnBiasesPagina").classList.add("active");
    } else if (queryStrin.includes("aanpassingsvermogen")){
        document.getElementById("aanpassingsvermogen").classList.add("active");
    } else if (queryStrin.includes("codex")){
        document.getElementById("codex").classList.add("active");
    } else if (queryStrin.includes("downloadGegevensPagina")){
        document.getElementById("downloadGegevensPagina").classList.add("active");
    }

}