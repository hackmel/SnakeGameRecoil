import { selector } from "recoil";
import { GhostState, SnakeTailState, FoodState, KeyPressState, ScoreState } from "./atoms";
import {SpriteElement} from './dto'
import {calculateRandomPostionsButExclude } from '../utils/math'


export const SnakeTailSelector = selector<SpriteElement[]>({
  key: "SnakeTailSelector",
  set: ({ set }, newValue) => {
    var tail = newValue as SpriteElement[]
    set(SnakeTailState, [
      ...tail,
      { top: tail[tail.length - 1].top, left: tail[tail.length - 1].left },
    ]);
  },
  get: () => SnakeTailState
});


export const FoodSelector = selector({
  key: "FoodSelector",
  set: ({ set, get }) => {

    let ghosts: SpriteElement[] =get(GhostState)
    let position = calculateRandomPostionsButExclude(ghosts)
    set(FoodState, position);
  },
  get: () => {}
});

export const GhostSelector = selector({
  key: "GhostSelector",
  set: ({ set, get }) => {

    var ghosts: SpriteElement[] = get(GhostState);
    var newGhosts: SpriteElement[] = [... ghosts];

    newGhosts.push(calculateRandomPostionsButExclude(ghosts))

    set(GhostState, newGhosts);
  },
  get: () => {}
});


export const ScoreSelctor = selector<Number>({
  key: "ScoreSelector",
  set: ({ set, get }, addedScore) => {
    let newScore = addedScore as Number;
    let score: Number = get(ScoreState);
    set(ScoreState, score.valueOf() + newScore.valueOf());
  },
  get:() => ScoreState
});

export const checkIfFoodEatenSelector = selector<boolean>({
  key: "checkIfFoodEatenSelector",
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

export const checkIfEatenByGhostSelector = selector<boolean>({
  key: "checkIfEatenByGhostSelector",
  get: ({ get }) => {
    var tails = get(SnakeTailState);
    var ghosts = get(GhostState);
    var isHit = false;

    tails.forEach((snakeBody) => {
     
      ghosts.forEach(ghost => {
        
        if (snakeBody.top === ghost.top && snakeBody.left === ghost.left) {
          isHit = true;
        }
      })
      
    });

    return isHit;
  },
});

export const checkIfCollidedWithWallSelector = selector({
  key: "checkIfCollidedWithWallSelector",
  get: ({ get }) => {
    var tails = get(SnakeTailState);

    return (
      tails[0].left >= 1000 ||
      tails[0].top >= 800 ||
      tails[0].left <= -1 ||
      tails[0].top <= -1
    );
  },
});

export const checkIfCollidedWithSelfSelector = selector({
  key: "checkIfCollidedWithSelfSelector",
  get: ({ get }) => {
    let tails = get(SnakeTailState);
    let collision = tails.filter(
      (item) => item.left === tails[0].left && item.top === tails[0].top
    );

    return collision.length === 2;
  },
});

export const SnakeDirectionSelector = selector({
  key: "SnakeDirectionSelector",
  set: ({ set, get }) => {
    var tails: SpriteElement[] = get(SnakeTailState);
    var keyPressed = get(KeyPressState);

    var newTails = [];

    switch (keyPressed) {
      case "Left":
        newTails.push({
          left: tails[0].left.valueOf() - 50,
          top: tails[0].top,
        });
        break;
      case "Right":
        newTails.push({
          left: tails[0].left.valueOf() + 50,
          top: tails[0].top,
        });
        break;
      case "Up":
        newTails.push({
          left: tails[0].left,
          top: tails[0].top.valueOf() - 50,
        });
        break;
      case "Down":
        newTails.push({
          left: tails[0].left,
          top: tails[0].top.valueOf() + 50,
        });
        break;
      default:
        newTails.push({
          left: tails[0].left,
          top: tails[0].top.valueOf() + 50,
        });
        break;
    }

    //Populate the rest of the tails
    for (var index = 1; index < tails.length; index++) {
      newTails.push({
        top: tails[index - 1].top,
        left: tails[index - 1].left,
      });
    }

    set(SnakeTailState, newTails);
  },
  get: () => {},
});
