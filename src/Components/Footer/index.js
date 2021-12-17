import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <>
        <MainWrapper>
          <Wrapper>
          <center>
          <img
                    src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
                    alt="footer"
                  />
          </center>
            <Container>
            <Logo>
              

                <SocialWrapper>
                  <SocialIcon href="https://twitter.com/bit_chro">
                    <SocialIconImg
                      src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                      alt="footer"
                    />
                  </SocialIcon>
                  <SocialIcon href="https://t.me/BITChro">
                    <SocialIconImg
                      src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                      alt="footer"
                    />
                  </SocialIcon>
                  <SocialIcon href="https://m.facebook.com/ChroBIT/?_rdr/">
                    <SocialIconImg
                      src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                      alt="footer"
                    />
                  </SocialIcon>

                  <SocialIcon
                    href="https://bscscan.com/token/0x881c3f97d994f7ba6b8a2d5488f32ed9ab15e502"
                    target="_blank"
                  >
                    <SocialIconImg
                      src={
                        process.env.PUBLIC_URL + "assets/img/logobscscan.png"
                      }
                      width="70"
                      alt="footer"
                    />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/Bitchro/Bitchro"
                    target="_blank"
                  >
                    <SocialIconImg
                      style={{
                        backgroundColor: "white",
                        borderRadius: "999px",
                      }}
                      src={process.env.PUBLIC_URL + "assets/img/git.png"}
                      width="70"
                      alt="footer"
                    />
                  </SocialIcon>
                </SocialWrapper>
                <SocialIconImgSet>
                  Reach US
                  <FooterLinks href="">finance@BITChro.com</FooterLinks>
                </SocialIconImgSet>
                <SocialIconImgSet>
                  <FooterLinks href="">support@BITChro.com</FooterLinks>
                </SocialIconImgSet>
              </Logo>
        
              

              <FooterLinksWrapper>
                <FooterLinksContainer>
                  <FooterLinks href="#">Home</FooterLinks>
                  <FooterLinks href="#overview">Overiew</FooterLinks>
                  <FooterLinks href="#works">How it Works</FooterLinks>
                </FooterLinksContainer>
                <FooterLinksContainer>
                  <FooterLinks href="#tokonomics">TokenNomics</FooterLinks>
                  <FooterLinks href="#roadmap">Roadmap</FooterLinks>
                  <FooterLinks href="#Team">Team</FooterLinks>
                </FooterLinksContainer>
              </FooterLinksWrapper>
            </Container>
          </Wrapper>
        </MainWrapper>
      </>
    );
  }
}

const MainWrapper = styled.div`
  color: #fff;

  background: linear-gradient(
    120deg,
    rgb(203, 1, 255) 0%,
    rgb(0, 255, 87) 100%
  );
  padding-top: 1px;
`;
const Wrapper = styled.div`
  background-color: #000;
  padding-top:20px;
`;
const Container = styled.div`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-between;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 0;
  flex-wrap: wrap;
  @media (max-width: 728px) {
    align-items: center;
    justify-content:center;
    padding-right: 0;
  }
`;
const ContainerFoot = styled.div`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-around;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  marginleft: 20px;
  padding: 32px 0;
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

const FooterLinks = styled.a`
  display: flex;

  cursor: pointer;
  color: white;
  text-decoration: none;
`;
const SocialWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const SocialIcon = styled.a`
  margin: 0 10px;
  cursor: pointer;
  color: white;
  text-direction: none;
`;

const SocialIconImg = styled.img`
  max-width: 24px;
`;
const SocialIconImgSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margintop: 10px;
`;

const SocialWrapperIn = styled.div`
  display: flex;
  flex-direction: column;
`;
