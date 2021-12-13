import React, { Component } from "react";
import styled from "styled-components";
export default class Subscribe extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <SubscribeLogo
              width="100%"
              src={process.env.PUBLIC_URL + "assets/img/metaverse.svg"}
            />
            
            <SubscribeContent>
            The Metaverse is constantly digital enviorment in which sevrel individuals can intrect and build articles while operating on digital represtations
            or symbols of themselves.
            <ul style={{textAlign:"left"}}>
                <li>
                    Metaverse is a sci-fi concept.
                </li>
                <li>
                    It's merely a dream right now.
                </li>
                <li>
                    Facebook Like companies are working to make it setting for few online sports.
                </li>
                <li>
                    Cryptocurrency can be used to purchase virtual land and other digital items.
                </li>
            </ul>
            </SubscribeContent>
    
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: #000;
  padding-top: 8rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
`;
const SubscribeLogo = styled.img`
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const SubscribeContent = styled.div`
  color: white;
  font-size:20px;
  textAlign:left;

  @media (max-width: 768px) {
    max-width: 532px;
  }
`;



