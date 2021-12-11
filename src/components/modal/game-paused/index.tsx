import React from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import arrowkeys from '../../../assets/images/arrow-keys.png'


export const GamePausedDialogBox: React.FC<{show: boolean}> = ({show}) => {
   
    return(
        <ModalDialog show={show} header="The game is paused"> 
           <DialogBox>
                <h3>Press arrow keys to resume game</h3>
                <img src={arrowkeys}></img>
            </DialogBox>   
           
        </ModalDialog>

    )

}