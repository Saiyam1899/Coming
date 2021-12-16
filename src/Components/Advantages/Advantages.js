import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";



import AdvantageCompo from "./AdvantageCompo";
export default class Team extends Component {
  render() {
    return (
      <>
        <Wrapper >
         
          <Container id="Team" style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/bg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
         <Logo src={process.env.PUBLIC_URL + "assets/images/advantages.svg"} />
            <ContainerImages>
              <TeamWrapper
                data-aos="zoom-in-right"
                data-aos-delay="50"
                data-aos-duration="3000"
              >
                <AdvantageCompo
                  desc="BITChro has always been straightforward and upfront,and this is ingrained in our nature and who we are."
                  img={process.env.PUBLIC_URL + "/assets/Advanatages/ethics.svg"}
                  linked={"https://www.linkedin.com/in/salmon-cathol-536459228/"}
                />
                <AdvantageCompo
                  desc="In BITChro,we treat our organization very carefully.we take complete responsibility and accountability in front of our shareholders,staff,users and followers."
                  img={process.env.PUBLIC_URL + "/assets/Advanatages/midone.svg"}
                  linked={"https://www.linkedin.com/in/wilhelm-carl-b02639227/"}
                />
                <AdvantageCompo
                 desc="BITChro belives in progress,but we also believe in being able to adapt to that development.We understand there will be no growth unless we are adaptive and nimble."
                  img={process.env.PUBLIC_URL + "/assets/Advanatages/versatile.svg"}
                  linked={"https://www.linkedin.com/in/shota-shun-183640227/"}
                />
       
              </TeamWrapper>
            </ContainerImages>
          </Container>
        </Wrapper>
        <Wrapper style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/bg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
       
        padding: "72px 0"}}>
          <h1
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="3000"
          >
            <Logo
              src={process.env.PUBLIC_URL + "assets/img/bitchro-allocation.svg"}
            />
          </h1>
          <Logo2
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="3000"
            src={
              process.env.PUBLIC_URL + "assets/img/bitchro-allocate-final.svg"
            }
          />
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: black;
  color: white;
`;
const Container = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  text-decoration: none;
  padding: 72px;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContainerImages = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
 
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Logo = styled.img`
  max-width: 500px;
  margin: 2rem 0;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const Logo2 = styled.img`
  max-width: 1000px;
  margin: 2rem 0;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const TeamWrapper = styled.div`
  max-width: 1000px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: center;
    alignitems: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 425px) {
    justify-content: center;
    alignitems: center;
    flex-wrap: wrap;
    width: 300px;
  }
`;
