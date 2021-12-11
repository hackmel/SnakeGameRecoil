import React, { MouseEventHandler } from "react";

import {ModalDialog} from '..'
import {DialogBox} from '../style'
import lost from '../../../assets/images/lose.png'




export const GameOverDialogBox: React.FC<{show: boolean, playAgainEvent: MouseEventHandler}> = ({show, playAgainEvent}) => {
   
    return(
        <ModalDialog show={show} header="Game Over"> 
            <DialogBox>
                <p>Press any key to play the game again</p>
                <img src={lost} alt="game over" />
            </DialogBox>   

            <button onClick={playAgainEvent}>Play again</button>
           
        </ModalDialog>
    )

}