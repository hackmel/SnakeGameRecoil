import React from "react";

import {SpriteElement} from '../../models/dto'
import { ArrayElements } from '../array-elements'
import ghostImage from '../../assets/images/ghost.png'

export const Ghosts: React.FC<{ghosts: SpriteElement[]}> = ({ghosts}): JSX.Element =>  {
  return (
    <ArrayElements items={ghosts} img={ghostImage}/>
    )
};
