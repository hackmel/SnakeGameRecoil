import { selector } from "recoil";
import { SnakeTailState, FoodState, KeyPressState, ScoreState } from "./atoms";

export const makeSnakeLonger = selector({
  key: "makeSnakeLonger",
  set: ({ set, get }) => {
    var tail = get(SnakeTailState);
    set(SnakeTailState, [
      ...tail,
      { top: tail[tail.length - 1].top, left: tail[tail.length - 1].left },
    ]);
  },
});

export const createFood = selector({
  key: "createFood",
  set: ({ set }) => {
    let left = parseInt(Math.floor(Math.random() * Math.floor(100)) / 5) * 5;
    let top = parseInt(Math.floor(Math.random() * Math.floor(100)) / 5) * 5;

    set(FoodState, { left: left, top: top });
  },
});

export const addScore = selector({
  key: "addScore",
  set: ({ set, get }) => {
    var score = get(ScoreState);

    set(ScoreState, ++score);
  },
});

export const checkIfFoodEaten = selector({
  key: "checkIfFoodEaten",
  get: ({ get }) => {
    var tails = get(SnakeTailState);
    var food = get(FoodState);
    var isHit = false;

    tails.forEach((element) => {
      if (element.top === food.top && element.left === food.left) {
        isHit = true;
      }
    });

    return isHit;
  },
});

export const checkIfCollidedWithWall = selector({
  key: "checkIfCollidedWithWall",
  get: ({ get }) => {
    var tails = get(SnakeTailState);

    return (
      tails[0].left >= 100 ||
      tails[0].top >= 100 ||
      tails[0].left <= -1 ||
      tails[0].top <= -1
    );
  },
});

export const checkIfCollidedWithSelf = selector({
  key: "checkIfCollidedWithSelf",
  get: ({ get }) => {
    var tails = get(SnakeTailState);
    var collision = tails.filter(
      (item) => item.left === tails[0].left && item.top === tails[0].top
    );

    return collision.length === 2;
  },
});

export const moveSnakeDirection = selector({
  key: "moveSnakeDirection",
  set: ({ set, get }) => {
    var tails = get(SnakeTailState);
    var keyPressed = get(KeyPressState);

    var newTails = [];

    switch (keyPressed) {
      case "Left":
        newTails.push({
          left: tails[0].left - 5,
          top: tails[0].top,
        });
        break;
      case "Right":
        newTails.push({
          left: tails[0].left + 5,
          top: tails[0].top,
        });
        break;
      case "Up":
        newTails.push({
          left: tails[0].left,
          top: tails[0].top - 5,
        });
        break;
      case "Down":
        newTails.push({
          left: tails[0].left,
          top: tails[0].top + 5,
        });
        break;
      default:
        newTails.push({
          left: tails[0].left,
          top: tails[0].top + 5,
        });
        break;
    }

    for (var index = 1; index < tails.length; index++) {
      newTails.push({
        top: tails[index - 1].top,
        left: tails[index - 1].left,
      });
    }

    set(SnakeTailState, newTails);
  },
});
