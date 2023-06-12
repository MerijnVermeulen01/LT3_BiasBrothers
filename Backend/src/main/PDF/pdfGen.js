// import the pdf-lib library
import {PDFDocument} from 'pdf-lib';

// fetch the template PDF document
const templateUrl = './PDF/PDFtemplates/PDFvoorpagina';
const templateBytes = await fetch(templateUrl).then(res => res.arrayBuffer());

// create a new PDF document
const pdfDoc = await PDFDocument.create();

// embed the template page into the new document
const templateDoc = await PDFDocument.load(templateBytes);
const templatePage = await pdfDoc.embedPage(templateDoc.getPage(0));
const page = pdfDoc.addPage();
page.drawPage(templatePage);

// generate the PDF data as a Uint8Array
const pdfData = await pdfDoc.save();

// create a Blob object from the PDF data
const blob = new Blob([pdfData], {type: 'application/pdf'});

// create a URL for the Blob object
const url = URL.createObjectURL(blob);

// create an <a> element to trigger the download
const link = document.createElement('a');
link.href = url;
link.download = 'my-file.pdf';

// trigger the download and show a save dialog
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// cleanup the URL object
URL.revokeObjectURL(url);


// import the mysql module
const mysql = require('mysql');

// create a connection to the MySQL database
const connection = mysql.createConnection({
    host: '167.71.5.105',
    user: 'root',
    password: '',
    database: 'biasbrothers'
});

// connect to the database
connection.connect();

// define a SQL query to fetch user data from a table
const query = 'SELECT ...'; // Vraag Merijn

// execute the query with a parameter
const userId = 123;
connection.query(query, [userId], function (error, results, fields) {
    if (error) throw error;

    // close the database connection
    connection.end();

    // pass the user data to the PDF generation function
    const userData = results[0];
    generatePdf(userData);
});

// define a function to generate a PDF document with the user data
async function generatePdf(userData) {
    // import the pdf-lib library
    const {PDFDocument, StandardFonts} = require('pdf-lib');

    // set the default font for the page to Helvetica
    page.setFont(StandardFonts.Helvetica);

    // add some dynamic text to the page
    page.drawText(`Name: ${userData.name}`, {x: 50, y: 700});
    page.drawText(`Age: ${userData.age}`, {x: 50, y: 680});
    page.drawText(`Email: ${userData.email}`, {x: 50, y: 660});

}
