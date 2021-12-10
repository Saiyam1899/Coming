import React from "react";
import { Container } from "react-bootstrap";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import App from "./Functionlity/index";
export default function Airdrop() {
  return (
    <>
      <div className="one">
        <App />
        {/* <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FinalSection /> */}
      </div>
    </>
  );
}
