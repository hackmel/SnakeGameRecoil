import React from "react";
import styled from "styled-components";

import {Positions} from '../../models/dto'
import snake from '../../assets/images/snake.png'


const Tail = styled.div<Positions>`
  position: absolute;
  background-image: url(${snake});
  background-size: contain;
  height: 50px;
  width: 50px;
  top: ${(props: any)=> props.top}px;
  left: ${(props: any) => props.left}px;
`;

export const Snake: React.FC<{tails: Positions[]}> = ({tails}): JSX.Element =>  {
  return (
    <> 
      {
        tails.map(item => <Tail left={item.left} top={item.top} />)
      }
    </>
    )
};
 