import React from "react";
import { useRecoilState } from "recoil";
import { Food } from "../components/food";
import { FoodState } from "../models/atoms";

export const FoodContainer = () => {
  const [food] = useRecoilState(FoodState);
  return <Food left={food.left} top={food.top} />;
};
