const { jsPDF } = window.jspdf;
const doc = new jsPDF();

var button = document.getElementById('download');
button.addEventListener('click', () =>{
   doc.text("Hello, this is a pdf!", 10, 10);
   doc.save("sample.pdf");
});