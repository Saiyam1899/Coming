import React from "react";
import { Container } from "react-bootstrap";

import { css } from "aphrodite";
import { styles } from "../PublicSale/media";
import { AppCounter } from "../Counter/Counter";
import PrivateSellFunction from "../PrivateSellFunction";

export default function PrivateSales() {
  return (
    <Container
      fluid
      style={{
        width: "100%",

        background:
          "linear-gradient(90deg, rgba(9,9,11,1) 35%, rgba(171,52,195,0.8972506483061975) 58%, rgba(0,0,0,0.953273057269783) 60%)",
      }}
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <div className={css(styles.displayRight)}>
        <div className={css(styles.display)}>
          <p>
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>
              Next Generation NFT Marketplace
            </p>
            An open source platform for creation of 3D NFT compatible web-spaced
            (website) and objects, powered by Blockchain.
          </p>

          <PrivateSellFunction />

          <div style={{ textAlign: "center" }}>
            <br />
            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/Psale/tg.png"}
                className={css(styles.image_Logo)}
              />
            </button>
            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/Psale/white.png"}
                className={css(styles.image_Logo)}
              />
            </button>
          </div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "assets/Psale/Private-sector-01.png"}
          alt=""
          className={css(styles.image_private)}
        />
      </div>
    </Container>
  );
}
