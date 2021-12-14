import React from "react";
import Airdrop from "../Components/Airdrop";
const AirDropPage = () => {
  return (
    <>
      <Airdrop/>
      <button onClick={()=>
            window.scrollTo(0,100)
          }>
            Back
          </button>
    </>
  );
};

export default AirDropPage;
