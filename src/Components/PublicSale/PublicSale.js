import React from "react";
import { Container, Row, Col, Nav, ButtonGroup } from "react-bootstrap";

import { css } from "aphrodite";
import { styles } from "./media";
import { AppCounter } from "../Counter/Counter";
import { CounterSlider } from "../Counter/CounterSlider";
import Progress_bar from "../Counter/Slider";

export default function PublicSector() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "black", width: "100%", minHeight: "100vh" }}
      >
        {/* <Sidebar /> */}
        <div className={css(styles.displayRight)}>
          <div className={css(styles.display)}>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Next Generation NFT Marketplace
            </h1>
            <p>
              An open source platform for creation of 3D NFT compatible
              <br />
              web-spaced (website) and objects, powered by Blockchain.
            </p>
            <CounterSlider />
         

            <ButtonGroup>
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
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/Psale/sidephoto.png"}
            alt=""
            className={css(styles.image)}
          />
        </div>
        <div className={css(styles.displayCard)}>
          <div>
            <div
              style={{
                background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
                borderRadius: 5,
                padding: 3,
              }}
            >
              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  padding: 20,
                }}
              >
                <div>
                  <h3 style={{ color: "#ffffff" }}>TIER 1</h3>
                </div>
                <div>
                  <h3 style={{ color: "#ffffff" }}>$0.50 Per Token</h3>
                </div>
                <div>
                  <form action="/action_page.php">
                    <div
                      style={{
                        background:
                          "linear-gradient(120deg,#cb01ff 0%,#00ff57 100% )",
                        borderRadius: 5,
                        padding: 2,
                      }}
                    >
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        defaultValue="Buy Token"
                        style={{ background: "#000", color: "white" }}
                      />
                    </div>
                    <br />
                    <div
                      style={{
                        background:
                          "linear-gradient( 120deg,#cb01ff 0%,#00ff57 100% )",
                        borderRadius: 5,
                        padding: 2,
                      }}
                    >
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        defaultValue="BUSD Amount"
                        style={{ background: "#000", color: "white" }}
                      />
                    </div>
                    <br />
                  </form>
                </div>
                <div style={{ margin: "1rem 0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Psale/tokenbuy.png"}
                    style={{
                      height: 50,
                      background: "transparent",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
                borderRadius: 5,
                padding: 3,
              }}
            >
              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  padding: 20,
                }}
              >
                <div>
                  <h3 style={{ color: "#ffffff" }}>TIER 1</h3>
                </div>
                <div>
                  <h3 style={{ color: "#ffffff" }}>$0.50 Per Token</h3>
                </div>
                <div>
                  <form action="/action_page.php">
                    <div
                      style={{
                        background:
                          "linear-gradient(120deg,#cb01ff 0%,#00ff57 100% )",
                        borderRadius: 5,
                        padding: 2,
                      }}
                    >
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        defaultValue="Buy Token"
                        style={{ background: "#000", color: "white" }}
                      />
                    </div>
                    <br />
                    <div
                      style={{
                        background:
                          "linear-gradient( 120deg,#cb01ff 0%,#00ff57 100% )",
                        borderRadius: 5,
                        padding: 2,
                      }}
                    >
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        defaultValue="BUSD Amount"
                        style={{ background: "#000", color: "white" }}
                      />
                    </div>
                    <br />
                  </form>
                </div>
                <div style={{ margin: "1rem 0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Psale/tokenbuy.png"}
                    style={{
                      height: 50,
                      background: "transparent",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
