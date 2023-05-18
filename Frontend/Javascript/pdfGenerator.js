var downloadButton = document.getElementById('downloadPage');
downloadButton.addEventListener('click', () => {
    generatePDF();
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Hello, this is a pdf", 10, 10);
    doc.save("sample.pdf");
}