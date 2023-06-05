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
        'http://localhost:7070/joinedParticipantTraps',
        'http://localhost:7070/getParicipantBias'
    ];

    // Fetches all data at once - puts the data in a json format.
    Promise.all(apiUrls.map(url => fetch(url).then(response => response.json())))
        .then(data => {
            const [selfDevelopmentData, trapData, biasData] = data;

            // Generate the pages using the fetched data

            // Page 1
            generatePage1(doc, selfDevelopmentData);

            // Page 2
            generatePage2(doc, trapData);

            // Page 3
            generatePage3(doc, biasData);

            // Save the PDF
            doc.save('Bias Brothers.pdf');
        })
        .catch(error => console.error(error));
}

// Page genarated using input-data from selfdevelopment.
function generatePage1(doc, data) {
    data.forEach((item, index) => {
        const title = item.selfDevelopment;
        const description = item.description;
        doc.text(20, 20 + index * 10, `${title}: ${description}`);
    });
}

// Page genarated using input-data from thinking traps.
function generatePage2(doc, data) {
    doc.addPage();
    data.forEach((item, index) => {
        const title = item.thinkingTraps;
        const description = item.description;
        doc.text(20, 20 + index * 10, `${title}: ${description}`);
    });
}

// Page genarated using input-data from biases.
function generatePage3(doc, data) {
    doc.addPage();
    data.forEach((item, index) => {
        const title = item.nameBias;
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

