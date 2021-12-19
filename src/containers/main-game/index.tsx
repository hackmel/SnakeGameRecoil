import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { KeyPressState } from "../../models/atoms";

import {
  SnakeTailSelector,
  FoodSelector,
  checkIfFoodEatenSelector,
  checkIfCollidedWithWallSelector,
  SnakeDirectionSelector,
  checkIfCollidedWithSelfSelector,
  checkIfEatenByGhostSelector,
  ScoreSelctor,
  GhostSelector,
} from "../../models/selectors";

// import custom hooks
import { useInterval } from "../../hooks/useInterval";
import { useKeyPress } from "../../hooks/useKeyPress";

// import container components
import { SnakeContainer } from "../snake/index";
import { FoodContainer } from "../food/index";
import { GhostContainer } from "../ghost/index";
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
  const generateBomb = useSetRecoilState(GhostSelector);
  const moveSnake = useSetRecoilState(SnakeDirectionSelector);
  const updateScoreWith = useSetRecoilState(ScoreSelctor);

  //getter selectors that are used to compute the state without changing them
  const isFoodEaten = useRecoilValue(checkIfFoodEatenSelector);
  const isWallHit = useRecoilValue(checkIfCollidedWithWallSelector);
  const isSelfHit = useRecoilValue(checkIfCollidedWithSelfSelector);
  const snakeTail = useRecoilValue(SnakeTailSelector);
  const isEatenByGhost = useRecoilValue(checkIfEatenByGhostSelector);

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


    if(isGameOver() && keyPressed !== Direction.Enter) {
      return;
    }

    if(isInitialized() && keyPressed === Direction.Unknown) {
      return;
    }

    if(keyPressed === Direction.Enter && isGameOver()) {
      window.location.reload();
    }
    
    if(keyPressed === Direction.Paused) {
      setGameState(GameState.Paused);  
      return;
    }
  
    if (keyPressed !== Direction.Unknown 
                  && keyPressed !== Direction.Enter){
      setGameState(GameState.Active)
    }

    setKeyPressState(keyPressed); 
    
  }, [keyPressed]);


  // This where the game logic
  useInterval(() => {
    
    if(!isActive()) return;

      moveSnake();
      if (isWallHit || isSelfHit || isEatenByGhost) {
        setGameState(GameState.GameOver);  
      }
  
      if (isFoodEaten) {
        updateScoreWith(1);
        addNewTail(snakeTail);
        generateFood(calculateRandomPostions());
        generateBomb()
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
        <GameOverDialogBox show={isGameOver()}/>
        <SnakeContainer />
        <FoodContainer />
        <GhostContainer/>
      </GameContainer>
     
    </MainApp>
  );
}
