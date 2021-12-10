import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Section1 extends Component {
  render() {
    return (
      <>
        <Section1Container>
          <Section1Content
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <Section1Logo
              src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
            />

            <Section1Logo src={process.env.PUBLIC_URL + "assets/img/NFT.svg"} />
            <h3>
              BITChro is a platform that intends to make nonfungible tokens (NFTs) more accessible as a financial asset in the metaverse.
            </h3>
            <Section1ButtonContainer>
              <Section1Button
                imgURL={process.env.PUBLIC_URL + "assets/images/items/button2.svg"}
                to="/airdrop"
              >
                <span>AirDrop</span>
              </Section1Button>
              <Section1Button
                imgURL={process.env.PUBLIC_URL + "assets/images/items/button1.svg"}
                to="/private-sell"
              >
                <span>Private Sale</span>
              </Section1Button>
            </Section1ButtonContainer>
          </Section1Content>
          <Section1ImgContainer
            data-aos="fade-down-left"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <img
              width="100%"
              src={process.env.PUBLIC_URL + "assets/images/section1.png"}
              alt="footer"
            />
          </Section1ImgContainer>
        </Section1Container>
      </>
    );
  }
}

const Section1Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 72px 0;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
const Section1Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-right: 72px;
  @media (max-width: 920px) {
    align-items: center;
    padding-right: 0;
  }
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;
const Section1Logo = styled.img`
  max-width: 300px;
  min-width: 200px;
  margin: 0.8rem 0;
`;

const Section1ButtonContainer = styled.div`
  display: flex;
`;
const Section1Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
  width: 150px;
  background-position: center;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;
const Section1ImgContainer = styled.div`
  max-width: 700px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
