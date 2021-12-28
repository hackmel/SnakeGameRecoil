
import { atom } from "recoil";
import {SpriteElement} from '../models/dto'


export const SnakeTailState = atom<SpriteElement[]>({
  key: "SnakeTailState",
  default:  [
    { top: 150, left: 300 },
    { top: 150, left: 250 },
    { top: 150, left: 200 },
  ] 
});

export const FoodState = atom<SpriteElement>({
  key: "FoodState",
  default: { top: 0, left: 0 },
});

export const GhostState = atom<SpriteElement[]>({
  key: "GhostState",
  default:  [] 
});

export const KeyPressState = atom<string>({
  key: "KeyPressState",
  default: "",
});

export const ScoreState = atom<Number>({
  key: "ScoreState",
  default: 0,
});
