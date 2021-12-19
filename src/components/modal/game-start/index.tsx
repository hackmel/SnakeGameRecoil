import React from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import arrowkeys from '../../../assets/images/arrow-keys.png'


export const GameStartDialogBox: React.FC<{show: boolean}> = ({show}) => {
   
    return(
        <ModalDialog show={show} header="Welcome to the game"> 
           <DialogBox>
                <p>Use arrow keys to start/navigate</p>
                <p>Press space bar for help</p>
                <img src={arrowkeys}></img>
            </DialogBox>   
           
        </ModalDialog>

    )

}