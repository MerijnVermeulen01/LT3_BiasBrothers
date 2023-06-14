var downloadButton = document.getElementById("downloadPage");
downloadButton.addEventListener("click", generatePDF);

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const apiUrls = [
    "http://localhost:7070/selfDevelopment",
    "http://localhost:7070/joinedParticipantTraps",
    "http://localhost:7070/getParicipantBias",
  ];

  // Fontpage added to pdf
  var page = "/Frontend/PDFs/pdfDesign.png";
  doc.addImage(page, "PNG", 0, 0, 210, 297); // Adjust the coordinates and dimensions as needed

  // Fetches all data at once - puts the data in a json format.
  Promise.all(
    apiUrls.map((url) => fetch(url).then((response) => response.json()))
  )
    .then((data) => {
      const [selfDevelopmentData, trapData, biasData] = data;

      // Page 1
      generatePage1(doc, selfDevelopmentData);

      // Page 2
      generatePage2(doc, trapData);

      // Page 3
      generatePage3(doc, biasData);

      // Save the PDF
      doc.save("Bias Brothers.pdf");
    })
    .catch((error) => console.error(error));
}

// Page genarated using input-data from selfdevelopment.
function generatePage1(doc, data) {
  doc.addPage();

  // Set title for page
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(20, 22, `Mijn Ontwikkelacties\n\n`);

  let yPos = 40; // Initial vertical position for the title

  data.forEach((item, index) => {
    const title = String(item.selfDevelopment);
    const description = item.description;

    // Reset to default weight and font size 16
    doc.setFont(undefined, "normal");
    doc.setFontSize(16);

    // Set the color for the title
    doc.setTextColor(73, 207, 128);

    // Check if there is enough space on the current page for the content
    const titleHeight = doc.getTextDimensions(title).h;
    const descriptionLines = doc.splitTextToSize(description, 227);
    const descriptionHeight = descriptionLines.length * 7;
    const totalContentHeight = titleHeight + 9 + descriptionHeight + 16;

    // If there is not enough space, create a new page
    if (yPos + totalContentHeight > doc.internal.pageSize.height) {
      doc.addPage();
      yPos = 22; // Reset the vertical position for the new page
    }

    // Title with the specified color
    doc.text(20, yPos, `${title}:\n`);

    // Line as separator for text. + (style)
    doc.line(15, yPos + 4, 195, yPos + 4);

    // Reset style to default
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    // Split the description into multiple lines based on the maximum width
    descriptionLines.forEach((line, lineIndex) => {
      doc.text(20, yPos + 10 + lineIndex * 7, line);
    });

    // Update the vertical position for the next element
    yPos += totalContentHeight + 5;
  });
}

// Page genarated using input-data from thinking traps.
function generatePage2(doc, data) {
  doc.addPage();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(20, 22, `Mijn Denkvalkuilen\n\n`);

  let yPos = 40; // Initial vertical position for the title

  data.forEach((item, index) => {
    const title = String(item.thinkingTraps);
    const description = item.description;

    // Reset to default weight and font size 16
    doc.setFont(undefined, "normal");
    doc.setFontSize(16);

    // Set the style for the title
    doc.setTextColor(73, 207, 128);

    // Check if there is enough space on the current page for the content
    const titleHeight = doc.getTextDimensions(title).h;
    const descriptionLines = doc.splitTextToSize(description, 227);
    const descriptionHeight = descriptionLines.length * 7;
    const totalContentHeight = titleHeight + 9 + descriptionHeight + 16;

    // If there is not enough space, create a new page
    if (yPos + totalContentHeight > doc.internal.pageSize.height) {
      doc.addPage();
      yPos = 22; // Reset the vertical position for the new page
    }

    // Title with the specified color
    doc.text(20, yPos, `${title}:\n`);

    // Line as separator for text. + (style)
    doc.line(15, yPos + 4, 195, yPos + 4);

    // Reset style to default
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    // Split the description into multiple lines based on the maximum width
    descriptionLines.forEach((line, lineIndex) => {
      doc.text(20, yPos + 10 + lineIndex * 7, line);
    });

    // Update the vertical position for the next element
    yPos += totalContentHeight + 5;
  });
}

// Page genarated using input-data from biases.
function generatePage3(doc, data) {
  doc.addPage();

  // Set title for page
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(20, 22, `Mijn Biases\n\n`);

  let yPos = 40; // Initial vertical position for the title

  data.forEach((item, index) => {
    const title = String(item.nameBias);
    const description = item.description;

    // Reset to default weight and font size 16
    doc.setFont(undefined, "normal");
    doc.setFontSize(16);

    // Set the style for the title
    doc.setTextColor(73, 207, 128);

    // Check if there is enough space on the current page for the content
    const titleHeight = doc.getTextDimensions(title).h;
    const descriptionLines = doc.splitTextToSize(description, 227);
    const descriptionHeight = descriptionLines.length * 7;
    const totalContentHeight = titleHeight + 9 + descriptionHeight + 16;

    // If there is not enough space, create a new page
    if (yPos + totalContentHeight > doc.internal.pageSize.height) {
      doc.addPage();
      yPos = 22; // Reset the vertical position for the new page
    }

    // Title with the specified color
    doc.text(20, yPos, `${title}:\n`);

    // Line as separator for text. + (style)
    doc.line(15, yPos + 4, 195, yPos + 4);

    // Reset style to default
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    // Split the description into multiple lines based on the maximum width
    descriptionLines.forEach((line, lineIndex) => {
      doc.text(20, yPos + 10 + lineIndex * 7, line);
    });

    // Update the vertical position for the next element
    yPos += totalContentHeight + 5;
  });
}
