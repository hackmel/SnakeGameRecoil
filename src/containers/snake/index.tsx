import React  from "react";
import { useRecoilState } from "recoil";

import { Snake } from "../../components/snake";
import { SnakeTailState } from "../../models/atoms";
import {SpriteElement} from '../../models/dto'

export const SnakeContainer = (): JSX.Element => {
  const [TailsState] = useRecoilState<SpriteElement[]>(SnakeTailState);
  return <Snake tails={TailsState} />;
};
