import React, { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  SnakeTailSelector,
  FoodSelector,
  checkIfFoodEatenSelector,
  checkIfCollidedWithWallSelector,
  SnakeDirectionSelector,
  checkIfCollidedWithSelfSelector,
  ScoreSelctor,
} from "../../models/selectors";

import {calculateRandomPostions} from '../../utils/math'

import { SnakeContainer } from "../snake/index";
import { FoodContainer } from "../food/index";
import { useInterval } from "../../hooks/useInterval";

import { MainApp, GameContainer } from "./styles";

export default function MainGameContainer() {
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

  useEffect(() => {
    generateFood(calculateRandomPostions());
  }, []);

  useInterval(() => {
    moveSnake();
    if (isWallHit || isSelfHit) {
      window.location.reload();
      alert("Game Over");

      console.log("you hit ur self");
    }

    if (isFoodEaten) {
      updateScoreWith(1);
      addNewTail(snakeTail);
      generateFood(calculateRandomPostions);
    }
  }, 200);

  return (
    <MainApp>
     
      <GameContainer>
        <SnakeContainer />
        <FoodContainer />
      </GameContainer>
     
    </MainApp>
  );
}
