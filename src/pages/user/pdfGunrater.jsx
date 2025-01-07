import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import download from 'downloadjs';
import Design from '../../assets/Design.pdf'
const PdfGenerator = () => {
    const [orderId, setOrderId] = useState('OD0001');
    const [customerName, setCustomerName] = useState('John Doe');

    const generatePdf = async () => {
        // Load the PDF template exported from Figma
        const url = `${Design}`;
        const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

        // Load the existing PDF
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Get the first page of the PDF
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Insert dynamic data into the PDF
        firstPage.drawText(orderId, {
            x: 100,
            y: 500,
            size: 12,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(customerName, {
            x: 100,
            y: 470,
            size: 12,
            color: rgb(0, 0, 0),
        });

        // Save the modified PDF
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, 'generated-pdf.pdf', 'application/pdf');
    };

    return (
        <div>
            <h1>Order ID: {orderId}</h1>
            <button onClick={generatePdf}>Generate PDF</button>
        </div>
    );
};

export default PdfGenerator;
