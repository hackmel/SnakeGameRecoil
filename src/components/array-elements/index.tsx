import React from "react";

import {SpriteElement} from '../../models/dto'
import {Element} from '../element'

export const ArrayElements: React.FC<{items: SpriteElement[], img?: string}> = ({items, img}): JSX.Element =>  {
  return (
    <> 
      {
        items.map(item => <Element left={item.left} top={item.top} img={img ? img : item.img} />)
      }
    </>
    )
};