import React, { Component } from "react";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          style={{
            background: "#dfd5de8c",
            backdropFilter: "saturate(180%) blur(10px)",
            padding: "1.5rem",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div>
            <div>
              <h4 style={{ marginLeft: "50px" }}>From</h4>
              <div
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  padding: "1rem 0.6rem",
                  width: "70%",
                  margin: "0 auto",
                  borderRadius: "999px",
                  justifyContent: "space-around",
                }}
              >
                <input
                  placeholder="0.0"
                  type="number"
                  onChange={(e) => this.props.ChangeForm(e.target.value)}
                  style={{ outline: "none", border: "none" }}
                  value={this.props.fromData}
                  min={0}
                ></input>
                <div>BUSD</div>
              </div>
            </div>
            <div>
              <h4 style={{ marginLeft: "50px" }}>To</h4>
              <div
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  padding: "1rem 0.6rem",
                  width: "70%",
                  margin: "0 auto",
                  borderRadius: "999px",
                  justifyContent: "space-around",
                }}
              >
                <input
                  placeholder="0.0"
                  type="number"
                  disabled
                  style={{ outline: "none", border: "none" }}
                  value={this.props.toData}
                ></input>
                <div>BTCH</div>
              </div>
            </div>
          </div>{" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: `${this.props.isApproved ? "#000" : "grey"}`,
                borderRadius: "999px",
                width: "40%",
                padding: "0.8rem",
                color: "#fff",
                marginTop: "40px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={this.props.isApproved ? this.props.BuyButton : null}
            >
              Buy Now
            </div>
          </div>
        </div>
      </>
    );
  }
}
