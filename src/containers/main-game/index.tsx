import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { KeyPressState } from "../../models/atoms";

import {
  SnakeTailSelector,
  FoodSelector,
  checkIfFoodEatenSelector,
  checkIfCollidedWithWallSelector,
  SnakeDirectionSelector,
  checkIfCollidedWithSelfSelector,
  ScoreSelctor,
} from "../../models/selectors";

// import custom hooks
import { useInterval } from "../../hooks/useInterval";
import { useKeyPress } from "../../hooks/useKeyPress";

// import container components
import { SnakeContainer } from "../snake/index";
import { FoodContainer } from "../food/index";
import { GameStartDialogBox } from '../../components/modal/game-start'
import { GameOverDialogBox } from '../../components/modal/game-over'
import { GamePausedDialogBox } from '../../components/modal/game-paused'


// import utilities
import {calculateRandomPostions} from '../../utils/math'
import {KeyPressType, Direction, GameState} from '../../enum'
import { MainApp, GameContainer } from "./styles";

export const  MainGameContainer = (): JSX.Element => {

  // setter selectors that updates the state
  const addNewTail = useSetRecoilState(SnakeTailSelector);
  const generateFood = useSetRecoilState(FoodSelector);
  const moveSnake = useSetRecoilState(SnakeDirectionSelector);
  const updateScoreWith = useSetRecoilState(ScoreSelctor);

  //getter selectors that are used to compute the state without changing them
  const isFoodEaten = useRecoilValue(checkIfFoodEatenSelector);
  const isWallHit = useRecoilValue(checkIfCollidedWithWallSelector);
  const isSelfHit = useRecoilValue(checkIfCollidedWithSelfSelector);
  const snakeTail = useRecoilValue(SnakeTailSelector);

  // get key stroke event state
  const setKeyPressState = useSetRecoilState<string>(KeyPressState);
  const [keyPressed, setKeyPressed] = useKeyPress();

  
  const [gameState, setGameState] = useState<GameState>(GameState.Initialized)
  
  // Initalize game
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      setKeyPressed(event.key as KeyPressType);
    });

    generateFood(calculateRandomPostions());
  }, []);


  // Check for key events, state and direction
  useEffect(() => { 
    if(keyPressed === Direction.Unknown && isInitialized()) {
      return;
    }
    
    if(keyPressed === Direction.Paused) {
      setGameState(GameState.Paused);  
      return;
    }

    if(isPaused() && keyPressed !== Direction.Unknown) {
      setGameState(GameState.Active)
    }
    
    if (keyPressed !== Direction.Unknown){
      setGameState(GameState.Active)
    }

    setKeyPressState(keyPressed); 
    
  }, [keyPressed]);


  // This where the game logic
  useInterval(() => {
    
    if(!isActive()) return;

      moveSnake();
      if (isWallHit || isSelfHit) {
        setGameState(GameState.GameOver);  
      }
  
      if (isFoodEaten) {
        updateScoreWith(1);
        addNewTail(snakeTail);
        generateFood(calculateRandomPostions());
      }

  }, 200);


  const isInitialized = () => gameState === GameState.Initialized;
  const isPaused = () => gameState === GameState.Paused;
  const isGameOver = () => gameState === GameState.GameOver;
  const isActive = () => gameState === GameState.Active;


  return (
    <MainApp>
     
      <GameContainer>
        <GameStartDialogBox show={isInitialized()}/>
        <GamePausedDialogBox show={isPaused()}/>
        <GameOverDialogBox show={isGameOver()} playAgainEvent={()=> { window.location.reload()}}/>
        <SnakeContainer />
        <FoodContainer />
      </GameContainer>
     
    </MainApp>
  );
}
