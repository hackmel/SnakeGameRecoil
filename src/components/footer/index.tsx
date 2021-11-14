import React from "react";
import styled from "styled-components";


const FooterElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-family: "GraublauWeb", "Arial Narrow", Arial, sans-serif;
    font-weight: bold;
    font-size: x-large;
    color: aliceblue;
    &:hover {
      font-size: xx-large;
    }

    a {
      text-decoration: none;
      color: aliceblue;

      &:hover {
        font-size: xx-large;
      }
    }
`;

export const Footer = (): JSX.Element => {
  return (
    <FooterElement> 
      <div>Author: hackmel</div>
      <div>
        <a href="https://github.com/hackmel/SnakeGameRecoil">
          Get the code here
        </a>
      </div>
    </FooterElement>
  );
};
