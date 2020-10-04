import React, { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";


import {
  makeSnakeLonger,
  createFood,
  checkIfFoodEaten,
  checkIfCollidedWithWall,
  moveSnakeDirection,
  checkIfCollidedWithSelf
} from "../../models/selectors";

import { SnakeContainer } from "../snake/index";
import { FoodContainer } from "../food/index";
import { useInterval } from "../../hooks/useInterval";

import {MainApp, GameContainer, InvisibleContainer} from './styles'

export default function MainGame() {
  // setter selectors that updates the state
  const addTail = useSetRecoilState(makeSnakeLonger);
  const addFood = useSetRecoilState(createFood);
  const moveSnake = useSetRecoilState(moveSnakeDirection);

  //getter selectors that are used to compute the state without changing them
  const isFoodEaten = useRecoilValue(checkIfFoodEaten);
  const isWallHit = useRecoilValue(checkIfCollidedWithWall);
  const isSelfHit = useRecoilValue(checkIfCollidedWithSelf);

  useEffect(() => {
    addFood();
  }, []);

  useInterval(() => {
     moveSnake();
    if (isWallHit || isSelfHit) {
      window.location.reload();
      alert("Game Over");

      console.log("you hit ur self")
    }

    if (isFoodEaten) {
      addTail();
      addFood();
    }
  }, 200);

  return (
    <MainApp>
       <InvisibleContainer/>
       <GameContainer> 
        <SnakeContainer />
        <FoodContainer />
       </GameContainer>
       <InvisibleContainer/>
    </MainApp>
  );
}
