// This function makes the sidebar.
function sidebarLoad(){
    // This piece of code makes the sidebar with HTML
    document.write(
        "<nav>\
            <ul>\
                <li id='logo'><img alt=\"\" src=\"../Images/BiasBrothers-Logo-Sidebar.png\" /></li>\
                <li id='dashboard'><a href='../index.html'><img alt=\"\" src=\"../Images/Dashboard.png\" /></a><span class='tooltip' >Dashboard</span></li>\
                <hr />\
                <li id='selfDevelopment'><a href='selfDevelopment.html'><img alt=\"\" src=\"../Images/selfDevelopment.png\" /></a><span class='tooltip'>Ontwikkelacties</span></li>\
                <li id='thinkingTraps'><a href='thinkingTraps.html'><img alt=\"\" src=\"../Images/thinkingTraps.png\" /></a><span class='tooltip'>Denkvalkuilen</span></li>\
                <li id='myBiasPage'><a href='myBiasPage.html'><img alt=\"\" src=\"../Images/Biases.png\" /></a><span class='tooltip'>Mijn Biases</span></li>\
                <li id='editPossibility'><a href='editPossibility.html'><img alt=\"\" src=\"../Images/editPossibility.png\" /></a><span class='tooltip'>Aanpassingsvermogen</span></li>\
                <hr />\
                <li id='codex'><a href='codexThinkingTraps.html'><img alt=\"\" src=\"../Images/Codex.png\" /></a><span class='tooltip'>Codex</span></li>\
                <li id='downloadPage' style='cursor: pointer'><img alt=\"\" src=\"../Images/Download-button.png\" /></a><span class='tooltip'>Download</span></li>\
            </ul>\
        </nav>"
    );

    // Add the script tag for jspdf library
    var jspdfScript = document.createElement('script');
    jspdfScript.src = 'https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js';
    document.head.appendChild(jspdfScript);

    // Add script tag for pdfGenerator.js file
    var pdfGenScript = document.createElement('script');
    pdfGenScript.type = 'text/javascript';
    pdfGenScript.src = '../Javascript/pdfGen.js';
    document.body.appendChild(pdfGenScript);

    // Add script tag for tooltips.js file
    var tooltips = document.createElement('script');
    tooltips.type = 'text/javascript';
    tooltips.src = '../Javascript/tooltips.js';
    document.body.appendChild(tooltips);

    // This code removes the class active form all the children in the div sidebarContainer
    const elements = document.querySelectorAll("#sidebarContainer *");
    elements.forEach((element) =>{
        element.classList.remove("active");
    });

    // This code looks at which page you are and then adds the class active to it
    // TODO: IF STATEMENT TO SWITCH STATEMENT
    const queryStrin = window.location.href;
    if (queryStrin.includes("selfDevelopment")){
        document.getElementById("selfDevelopment").classList.add("active");
    } else if (queryStrin.includes("thinkingTraps")){
        document.getElementById("thinkingTraps").classList.add("active");
    } else if (queryStrin.includes("myBiasPage")){
        document.getElementById("myBiasPage").classList.add("active");
    } else if (queryStrin.includes("editPossibility")){
        document.getElementById("editPossibility").classList.add("active");
    } else if (queryStrin.includes("codex")){
        document.getElementById("codex").classList.add("active");
    } else if (queryStrin.includes("downloadPage")){
        document.getElementById("downloadPage").classList.add("active");
    }
}
