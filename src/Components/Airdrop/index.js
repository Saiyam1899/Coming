import React from "react";
import { Container } from "react-bootstrap";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Airdrop() {
  return (
    <>
      <div className="one">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FinalSection />
      </div>
    </>
  );
}
