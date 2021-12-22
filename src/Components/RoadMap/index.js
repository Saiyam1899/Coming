import React, { Component } from "react";
import styled from "styled-components";

export default class Roadmap extends Component {
  render() {
    return (
      <>
        <Wrapper
          style={{
            width: "100%",
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "assets/images/bg.png"
            })`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            backgroundColor: "#000",
            padding: "0",
          }}
        >
          <Container id="roadmap">
            <Logo
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={process.env.PUBLIC_URL + "assets/img/RoadmapLogo.svg"}
            />
            <RoadmapLogo
              data-aos="zoom-in-up"
              data-aos-delay="5000"
              data-aos-duration="2000"
              width="100%"
              src={process.env.PUBLIC_URL + "assets/img/Roadmap.svg"}
            />
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: #000;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CircleImage = styled.img`
  max-width: 1000px;
  width: 100%;
  position: absolute;
  top: -180px;
  right: 0;
  @media (max-width: 500px) {
    top: 20px;
  }
`;

const Logo = styled.img`
  margin: 3rem 0;
  max-width: 350px;
  width: 100%;
  @media (max-width: 425px) {
    margin: 0;
  }
`;

const RoadmapLogo = styled.img``;
