
import {SpriteElement} from '../models/dto'

export const calculateRandomPostionsButExclude = (from: SpriteElement[]): SpriteElement =>  {  

      let left = Math.ceil(((Math.floor(Math.random() * 1000)) + 0) / 50 ) * 50;
      let top = Math.ceil(((Math.floor(Math.random() * 800)) + 0) / 50 ) * 50;

      let isGenarated = false;

      while (!isGenarated) {
      
        let exist = from.find( pos => {
           return pos.top === top && pos.left === left
         });

         if(exist) {
          left = Math.ceil(((Math.floor(Math.random() * 1000)) + 0) / 50 ) * 50;
          top = Math.ceil(((Math.floor(Math.random() * 800)) + 0) / 50 ) * 50;
    
         }else {
          isGenarated = true;
         }
      }

      return {
        left : left < 1000 ?  left : 950,
        top:  top < 800 ?  top : 750
      }
}

    
  
