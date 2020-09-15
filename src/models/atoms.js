import { atom } from "recoil";

export const SnakeTailState = atom({
  key: "SnakeTailState",
  default: [
    { top: 50, left: 50 },
    { top: 50, left: 5 },
    { top: 50, left: 10 },
  ],
});

export const FoodState = atom({
  key: "FoodState",
  default: { top: 0, left: 0 },
});

export const KeyPressState = atom({
  key: "KeyPressState",
  default: "",
});
