import React from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import arrowkeys from '../../../assets/images/arrow-keys.png'


export const GameStartDialogBox: React.FC<{show: boolean}> = ({show}) => {
   
    return(
        <ModalDialog show={show} header="Welcome to the game"> 
           <DialogBox>
                <h3>Press arrow keys to start the game</h3>
                <img src={arrowkeys}></img>
            </DialogBox>   
           
        </ModalDialog>

    )

}