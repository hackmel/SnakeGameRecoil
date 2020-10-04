import React from "react";
import styled from "styled-components";

const FoodBody = styled.div`
  position: absolute;
  background-color: red;
  height: 5%;
  width: 5%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

export const Food = (props) => {
  return <FoodBody left={props.left} top={props.top} />;
};
