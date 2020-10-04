import React from "react";
import styled from "styled-components";

const Tail = styled.div`
  position: absolute;
  background-color: dodgerblue;
  height: 5%;
  width: 5%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

export const Snake = (props) => {
  return props.tails.map((item) => {
    return <Tail left={item.left} top={item.top} />;
  });
};
