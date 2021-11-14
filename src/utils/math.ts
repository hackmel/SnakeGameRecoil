
import {Positions} from '../models/dto'

export const calculateRandomPostions = (): Positions =>  {
       
      let left = Math.ceil(((Math.floor(Math.random() * 1000)) + 0) / 50 ) * 50;
      let top = Math.ceil(((Math.floor(Math.random() * 800)) + 0) / 50 ) * 50;

        return {
            left : left < 1000 ?  left : 950,
            top:  top < 800 ?  top : 750
        }
}

    
  
