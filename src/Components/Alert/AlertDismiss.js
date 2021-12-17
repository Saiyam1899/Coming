import { render } from "@testing-library/react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./alert.css";

export default function AlertDismiss() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Link to="/private-sell">
         <p className="animate-charcter">
          <b> Private Sale is Live Now!</b>
        </p>
      </Link>
        
      
    );
  }
  return null;
}
