import React from "react";
import styled from "styled-components";

import {Positions} from '../../models/dto'
import food from '../../assets/images/food.png'


const FoodBody = styled.div<Positions>`
  position: absolute;
  background-image: url(${food});
  background-size: 50px 50px;
  height: 50px;
  width: 50px;
  top: ${(props: any) => props.top}px;
  left: ${(props: any) => props.left}px;
`;

export const Food = ({left, top}: Positions): JSX.Element => {
  return <FoodBody left={left} top={top} />;
};
