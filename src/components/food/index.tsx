import React from "react";

import {SpriteElement} from '../../models/dto'
import {Element} from '../element'
import food from '../../assets/images/food.png'

export const Food = ({left, top}: SpriteElement): JSX.Element => {
  return <Element left={left} top={top} img={food}/>;
};
