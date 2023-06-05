var downloadButton = document.getElementById('downloadPage');
downloadButton.addEventListener('click', () => {
    generatePDF();
});

function generatePDF() {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const apiUrls = [
        'http://localhost:7070/selfDevelopment',
        'http://localhost:7070/getParicipantTraps'
    ];

    // Fetches all data at once - puts the data in a json format
    Promise.all(apiUrls.map(url => fetch(url).then(response => response.json())))
        .then(data => {
            const [selfDevelopmentData, trapData] = data;

            // Generate the pages using the fetched data
            // Page 1 - retrieves data from selfdevelopment.
            generatePage1(doc, selfDevelopmentData);

            // Page 2 - retrieves data from thinking traps.
            doc.addPage();
            generatePage2(doc, trapData);

            // Page 3 - retrieves data from biases.

            // Save the PDF
            doc.save('Bias Brothers.pdf');
        })
        .catch(error => console.error(error));
}


function generatePage1(doc, data) {
    data.forEach((item, index) => {
        const title = item.selfDevelopment;
        const description = item.description;
        doc.text(20, 20 + index * 10, `${title}: ${description}`);
    });
}

function generatePage2(doc, data) {
    data.forEach((item, index) => {
        const title = item.thinkingtraps_idThinkingTraps;
        const description = item.description;
        doc.text(20, 20 + index * 10, `${title}: ${description}`);
    });
}









// function generatePDF() {
//     // Create a new jsPDF instance
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//
//     // Select the HTML elements you want to include in the PDF
//     const searchResults = document.querySelector('#textHeader3');
//
//     // Convert the selected elements to canvas using html2canvas
//     html2canvas(searchResults).then((canvas) => {
//         // Add the canvas to the PDF
//         // const pdf = new jsPDF('a4');
//         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
//
//         // Save the PDF
//         pdf.save('Bias Brothers.pdf');
//     });
// }

