import React from "react";
import { Container } from "react-bootstrap";

import { css } from "aphrodite";
import { styles } from "../PublicSale/media";
import { AppCounter } from "../Counter/Counter";

export default function PrivateSales() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <div className={css(styles.displayRight)}>
        <div className={css(styles.display)}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Next Generation NFT Marketplace
          </h1>
          <p style={{ color: "white" }}>
            An open source platform for creation of 3D NFT compatible
            <br />
            web-spaced (website) and objects, powered by Blockchain.
          </p>
          <AppCounter />

          <div style={{ textAlign: "center", margin: "1.3rem 0" }}>
            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/Psale/tokenbuy.png"}
                style={{
                  height: "60px",
                  background: "transparent",
                  outline: "none",
                }}
              />
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/Psale/tg.png"}
                style={{
                  height: "60px",
                  background: "transparent",
                  outline: "none",
                }}
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
                style={{
                  height: "60px",
                  background: "transparent",
                  outline: "none",
                }}
              />
            </button>
          </div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "assets/Psale/Private-sector-01.png"}
          alt=""
          className={css(styles.image)}
        />
      </div>
    </Container>
  );
}
