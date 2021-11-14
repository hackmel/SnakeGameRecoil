import React from "react";
import { useRecoilState } from "recoil";
import { Food } from "../../components/food/index";
import { FoodState } from "../../models/atoms";

export const FoodContainer = (): JSX.Element => {
  const [foodPosition] = useRecoilState(FoodState);
  return <Food {... foodPosition} />;
};
