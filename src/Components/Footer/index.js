import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo>
              <img
                src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
                alt="footer"
              />
            </Logo>
            <FooterLinksWrapper>
              <FooterLinksContainer>
                <FooterLinks>Home</FooterLinks>
                <FooterLinks>Overiew</FooterLinks>
                <FooterLinks>How it Works</FooterLinks>
              </FooterLinksContainer>
              <FooterLinksContainer>
                <FooterLinks>TokenNomics</FooterLinks>
                <FooterLinks>Roadmap</FooterLinks>
                <FooterLinks>Team</FooterLinks>
              </FooterLinksContainer>
            </FooterLinksWrapper>
            <SocialWrapper>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                  alt="footer"
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                  alt="footer"
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                  alt="footer"
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/instagram.svg"}
                  alt="footer"
                />
              </SocialIcon>
            </SocialWrapper>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 0 72px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 0;
  flex-wrap: wrap;
  @media (max-width: 728px) {
    align-items: center;
    padding-right: 0;
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0 20px;
`;
const FooterLinksWrapper = styled.div`
  display: flex;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;
const SocialWrapper = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  max-width: 32px;
`;
