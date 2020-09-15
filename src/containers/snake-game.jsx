import React, { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  makeSnakeLonger,
  createFood,
  checkIfFoodEaten,
  checkIfCollidedWithWall,
  moveSnakeDirection,
} from "../models/selectors";

import { SnakeContainer } from "./snake";
import { FoodContainer } from "./food";

import { useInterval } from "../hooks/useInterval";

import "../App.css";

export default function SnakeGame() {
  // setter selectors that updates the state
  const addTail = useSetRecoilState(makeSnakeLonger);
  const addFood = useSetRecoilState(createFood);
  const moveSnake = useSetRecoilState(moveSnakeDirection);

  //getter selectors that are used to compute the state without changing them
  const isFoodEaten = useRecoilValue(checkIfFoodEaten);
  const isWallHit = useRecoilValue(checkIfCollidedWithWall);

  useEffect(() => {
    addFood();
  }, []);

  useInterval(() => {
    moveSnake();
    if (isWallHit) {
      window.location.reload();
      alert("Game Over");
    }

    if (isFoodEaten) {
      addTail();
      addFood();
    }
  }, 200);

  return (
    <div className="App">
      <SnakeContainer />
      <FoodContainer />
    </div>
  );
}
