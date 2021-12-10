import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "./team.css";
export default class Team extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Logo src={process.env.PUBLIC_URL + "assets/img/Team.svg"} />
          <Container id="Team">
            <ContainerImages>
              <TeamWrapper
                data-aos="zoom-in-right"
                data-aos-delay="50"
                data-aos-duration="3000"
              >
                <Row style={{ textAlign: "center" }}>
                  <Col>
                    <TeamMemberLinks
                      href="https://www.linkedin.com/in/salmon-cathol-536459228/"
                      className="container"
                    >
                      <TeamMember
                        src={process.env.PUBLIC_URL + "assets/Team/Selmon.jpg"}
                      ></TeamMember>
                      <TeamOverlay>
                        Salmon Cathol
                        <br />
                        Chief Executive Officer
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks
                      href=" https://www.linkedin.com/in/hermann-walter-787461228/
                      "
                      className="container"
                    >
                      <TeamMember
                        src={process.env.PUBLIC_URL + "assets/Team/Herman.jpg"}
                      />
                      <TeamOverlay>
                        Hermann Walter
                        <br />
                        Chief Technical Officer
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks
                      href="https://www.linkedin.com/in/wilhelm-carl-b02639227/"
                      className="container"
                    >
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/WilhelmCarl.jpg"
                        }
                      />
                      <TeamOverlay>
                        {" "}
                        Wilhelm Carl
                        <br />
                        Business Manager
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks
                      href=" https://www.linkedin.com/in/akira-botan-108641227/"
                      className="container"
                    >
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/AkiraBotan.jpg"
                        }
                      />
                      <TeamOverlay>
                        Akira Botan
                        <br />
                        Senior Manager
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                </Row>
                <Row className="my-3" style={{ textAlign: "center" }}>
                  <Col>
                    {" "}
                    <TeamMemberLinks
                      href="https://www.linkedin.com/in/shota-shun-183640227/"
                      className="container"
                    >
                      {" "}
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/ShotaShun.jpg"
                        }
                      />
                      <TeamOverlay>
                        Shota Shum
                        <br />
                        Marketing Head
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks
                      href="https://www.linkedin.com/in/uyemura-akio-a36705227/"
                      className="container"
                    >
                      {" "}
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/UyemuraAkio.jpg"
                        }
                      />
                      <TeamOverlay>
                        Uyemura Akio
                        <br />
                        Accounts Executive
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks className="container">
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/StevenJohn.jpg"
                        }
                      />
                      <TeamOverlay>
                        Steven John
                        <br />
                        Advisor
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                  <Col>
                    <TeamMemberLinks className="container">
                      <TeamMember
                        src={
                          process.env.PUBLIC_URL + "assets/Team/HenryMax.jpg"
                        }
                      />
                      <TeamOverlay>
                        Henry Max
                        <br />
                        Advisor
                      </TeamOverlay>
                    </TeamMemberLinks>
                  </Col>
                </Row>
              </TeamWrapper>
            </ContainerImages>
          </Container>
        </Wrapper>
        <Wrapper>
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
  flex-direction: column-reverse;
  color: white;
  text-decoration: none;
  padding: 72px;
  justify-content: center;
  text-align: center;
  :hover {
    background: black;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const ContainerImages = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  :hover {
    background: black;
  }
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
  max-width: 690px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    justify-content: center;
  }
`;
const ContentWrapper = styled.div`
  flex: 0.8;
  margin-left: 3rem;
  @media (max-width: 1024px) {
    margin: 1rem;
  }
`;
const Content = styled.div`
  line-height: 1.8;
  max-width: 600px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const TeamMemberLinks = styled.a`
  
  width: 100%;
  max-width: 150px;
  width: 100%;
  height: 100%;
  font-size:14px;
  text-align:center;
 
  text-decoration:none;
  
  border-radius: 3px;

  
}
`;
const TeamMember = styled.img`
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;

  border-radius: 3px;
`;
const TeamOverlay = styled.div`
  margin-left: 10px;
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: "10px";
  @media (max-width: 768px) {
    font-size: "5px";
  }
`;
