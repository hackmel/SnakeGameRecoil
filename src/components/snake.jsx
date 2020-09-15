import React from "react";
import styled from "styled-components";

const Tail = styled.div`
  position: absolute;
  background-color: blue;
  height: 5%;
  width: 5%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

export const Zurot = (props) => {
  return props.tails.map((item) => {
    return <Tail left={item.left} top={item.top} />;
  });
};
