var downloadButton = document.getElementById('downloadPage');
downloadButton.addEventListener('click', () => {
    generatePDF();
});

function generatePDF() {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add the preset pages
    var presetPages = [
        '/Frontend/PDF-presets/pdfOntwerp.png',
        '/Frontend/PDF-presets/pdfOntwerp2.png',
        '/Frontend/PDF-presets/pdfOntwerp3.png',
        '/Frontend/PDF-presets/pdfOntwerp4.png',
        '/Frontend/PDF-presets/pdfOntwerp5.png',
        '/Frontend/PDF-presets/pdfOntwerp6.png'
    ];

    for (var i = 0; i < presetPages.length; i++) {
        // Load the preset page
        var pages = presetPages[i];

        // Add the page to the PDF
        doc.addImage(pages, 'PNG', 0, 0, 210, 297); // Adjust the coordinates and dimensions as needed
        doc.addPage(pages, 'PNG', 0, 0, 210, 297);

    }
    doc.save('Bias Brothers.pdf');
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