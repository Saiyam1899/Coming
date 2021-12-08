import React, { Component } from "react";
import styled from "styled-components";
export default class Section extends Component {
  render() {
    return (
      <>
        {" "}
        <Section3Container>
          <Section3Content
            imgURL={process.env.PUBLIC_URL + "assets/img/bitchroBG.svg"}
          >
            <Section3ImgWrapper>
              <Section3ImgContainer>
                <Section3Img
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section4.png"
                  }
                />
                <Section3Img
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section5.png"
                  }
                />
              </Section3ImgContainer>
              <Section3ImgContainer>
                <Section3Img
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section6.png"
                  }
                />
                <Section3Img
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section7.png"
                  }
                />
              </Section3ImgContainer>
            </Section3ImgWrapper>
            <Section3ContentWrapper>
              <Section4Img
                src={process.env.PUBLIC_URL + "assets/img/coming-soon-01.svg"}
                className="blink"
              />
            </Section3ContentWrapper>
          </Section3Content>
        </Section3Container>
      </>
    );
  }
}

const Section3Container = styled.div`
  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;
const Section3Content = styled.div`
  background-image: url(${(props) => props.imgURL});
  background-size: cover;

  display: flex;
  align-items: base-line;
  padding-top: 278px;
  justify-content: space-around;
  margin-top: 3rem;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }
`;
const Section3ImgWrapper = styled.div``;
const Section3ImgContainer = styled.div``;

const Section3Img = styled.img`
  width: 200px;
`;
const Section4Img = styled.img`
  width: 60%;
`;
const Section3ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  width: 100%;
  margin-top: 7rem;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 1rem;
    p {
      max-width: 532px;
    }
  }
`;

const Section2Logo = styled.img`
  max-width: 700px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;

const Section1Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
  width: 150px;
  background-position: center;
`;
