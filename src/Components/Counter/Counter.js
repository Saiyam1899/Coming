import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./nft.css";
import Slider from "./Slider";
export function AppCounter() {
  const [counter, setCounter] = React.useState(5660);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Container
        style={{
          background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
          borderRadius: "12px",
          padding: "4px",
          width: "80%",
          margin: "10px",
        }}
      >
        <Row className="rowClass">
          <span className="upper-text">
            {" "}
            Don't miss out on the unit sales and distribution
          </span>
          <Col className="para">
            <span>Days</span>
            <br />
            30
          </Col>
          <Col className="para">
            Hours
            <br />
            10
          </Col>
          <Col className="para">
            Minutes
            <br />
            18
          </Col>
          <Col className="para">
            Seconds
            <br />
            12
          </Col>
        </Row>
      </Container>
    </>
  );
}
