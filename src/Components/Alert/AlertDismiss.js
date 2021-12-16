import { render } from "@testing-library/react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./alert.css"

export default function AlertDismiss() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading><b>Private Sale!</b> is live now <b>Public Sale!</b> Coming Soon....</Alert.Heading>
      
        </Alert>
      );
    }
    return null
  }
  
  