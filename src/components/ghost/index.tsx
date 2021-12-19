import React from "react";
import styled from "styled-components";

import {Positions} from '../../models/dto'
import ghostImage from '../../assets/images/ghost.png'


const Ghost = styled.div<Positions>`
  position: absolute;
  background-image: url(${ghostImage});
  background-size: contain;
  height: 50px;
  width: 50px;
  top: ${(props: any)=> props.top}px;
  left: ${(props: any) => props.left}px;
`;

export const Ghosts: React.FC<{items: Positions[]}> = ({items}): JSX.Element =>  {
  return (
    <> 
      {
        items.map(item => <Ghost left={item.left} top={item.top} />)
      }
    </>
    )
};
