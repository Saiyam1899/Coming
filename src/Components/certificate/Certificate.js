import React from "react";
import "./certificate.css";
export default function Certificate() {
  return (
    <div
      className="containerClass"
      style={{
        width: "100%",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "assets/images/bg.png"
        })`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",

        padding: "72px",
      }}
    >
      <a
        href="https://drive.google.com/file/d/1mTUVzX3H9lQJIvoptJ-oNLiJxsLp-d2q/view?usp=sharing"
        target="_blank"
        style={{ textDecoration: "none", fontSize: "24px", color: "white" }}
      >
        <div>
          <img
            src={process.env.PUBLIC_URL + "assets/img/textcertificate.svg"}
            className="imageLogo"
          />
          <p style={{ marginTop: "30px", fontSize: "20px" }}>
            BIT_Chro now officially Registered in the Company house of UK as
            BITChro Metaverse Limited.
            <br /> To know more Click Here.
          </p>
        </div>
        <div className="imageFlex">
          <img
            src={
              process.env.PUBLIC_URL + "assets/images/certificateframefinal.jpg"
            }
            className="imageOne"
          />

          <img
            src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
            className="imageMid"
          />
          <img
            src={process.env.PUBLIC_URL + "assets/img/handshake.svg"}
            className="imageMid"
          />

          <img
            src={process.env.PUBLIC_URL + " assets/images/logocertificate.png"}
            className="imageTwo"
          />
        </div>
      </a>
    </div>
  );
}
