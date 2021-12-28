import React from "react";

import {SpriteElement} from '../../models/dto'
import {ArrayElements} from '../array-elements'
import snake from '../../assets/images/snake.png'

export const Snake: React.FC<{tails: SpriteElement[]}> = ({tails}): JSX.Element =>  {
  return (
       <ArrayElements items={tails} img={snake}/>
    )
};
 