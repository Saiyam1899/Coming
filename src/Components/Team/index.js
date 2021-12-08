import React, { Component } from "react";
import styled from "styled-components";
export default class Team extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container id="Team">
            <TeamWrapper
              data-aos="zoom-in-right"
              data-aos-delay="50"
              data-aos-duration="3000"
            >
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/AkiraBotan.jpg"}
              />
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/HenryMax.jpg"}
              />
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/ShotaShun.jpg"}
              />
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/StevenJohn.jpg"}
              />
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/UyemuraAkio.jpg"}
              />
              <TeamMember
                src={process.env.PUBLIC_URL + "assets/Team/WilhelmCarl.jpg"}
              />
            </TeamWrapper>
            <ContentWrapper>
              <Logo
                data-aos="flip-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                src={process.env.PUBLIC_URL + "assets/img/Team.svg"}
              />
              <Content>
                Let's say you want to create a simple and reusable component
                that you can use throughout your application. There should be a
                normal version and a big and primary version for the important
                buttons. This is what it should look like when rendered: (this
                is a live example, click on them!)
              </Content>
            </ContentWrapper>
          </Container>
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
  /* padding: 72px; */
  justify-content: center;
  text-align: left;
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
const TeamWrapper = styled.div`
  max-width: 510px;
  width: 100%;
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
const TeamMember = styled.img`
  max-width: 150px;
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 3px;
`;
