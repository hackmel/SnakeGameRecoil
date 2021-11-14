
import { atom } from "recoil";
import {Positions} from '../models/dto'


export const SnakeTailState = atom<Positions[]>({
  key: "SnakeTailState",
  default:  [
    { top: 150, left: 300 },
    { top: 150, left: 250 },
    { top: 150, left: 200 },
  ] 
});

export const FoodState = atom<Positions>({
  key: "FoodState",
  default: { top: 0, left: 0 },
});

export const KeyPressState = atom<string>({
  key: "KeyPressState",
  default: "",
});

export const ScoreState = atom<Number>({
  key: "ScoreState",
  default: 0,
});
