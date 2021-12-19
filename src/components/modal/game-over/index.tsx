import React, { MouseEventHandler } from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import lost from '../../../assets/images/lose.png'




export const GameOverDialogBox: React.FC<{show: boolean}> = ({show}) => {
   
    return(
        <ModalDialog show={show} header="Game Over"> 
            <DialogBox>
                <p>Press enter to play the game again</p>
                <img src={lost} alt="game over" />
            </DialogBox>   
           
        </ModalDialog>
    )

}