import React from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import arrowkeys from '../../../assets/images/arrow-keys.png'


export const GamePausedDialogBox: React.FC<{show: boolean}> = ({show}) => {
   
    return(
        <ModalDialog show={show} header="The game is paused"> 
           <DialogBox>
                <h3>Rules of the game</h3>
         
                <p>Press arrow keys to resume game</p>
                <p>Hit the orange cube to earn points</p>
                <p>Avoid the ghost and walls and yourself</p>
      
            </DialogBox>   
           
        </ModalDialog>

    )

}