import React, { useState } from "react";
import styled from "styled-components";
// import { IconContext } from "react-icons";
// import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <Logo
          width="100%"
          style={{ zIndex: "100", opacity: "1" }}
          src={process.env.PUBLIC_URL + "assets/img/FAQ.svg"}
        />
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <AccordianItem>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <div>{item.question}</div>
                    <span>{clicked === index ? "-" : "+"}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </AccordianItem>
              );
            })}
          </Container>
        </AccordionSection>
      </AccordionContainer>
    </AccordionWrapper>
  );
};

export const Data = [
  {
    question: "What do you call a dog magician?",
    answer:
      "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, video, audio, and other types of digital files.",
  },
  {
    question: "What do you call a dog magician?",
    answer:
      "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, video, audio, and other types of digital files.",
  },
  {
    question: "What do you call a dog magician?",
    answer:
      "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, video, audio, and other types of digital files.",
  },
];

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  background-image: url("https://www.trexsolutionsllc.com/wp-content/uploads/2019/01/WhatWeAreUpTo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const AccordionContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: black;
  padding: 72px 0;
`;

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
`;

const AccordionSection = styled.div`
  color: #fff;
`;

const Container = styled.div`
  padding: 0 30px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const AccordianItem = styled.div`
  border-bottom: 1px solid #fff;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Dropdown = styled.div`
  background: black;
  color: white;
  text-align: left;
  p {
    margin: 0;
    margin-top: 20px;
  }
`;

export default FAQ;
