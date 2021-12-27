import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "./whitepaper.pdf";
import "./pdf.css";
export default function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container>
      <center className="m-3">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </center>
    </Container>
  );
}
