import React  from "react";
import { useRecoilState } from "recoil";

import { Snake } from "../../components/snake";
import { SnakeTailState } from "../../models/atoms";
import {Positions} from '../../models/dto'

export const SnakeContainer = (): JSX.Element => {
  const [TailsState] = useRecoilState<Positions[]>(SnakeTailState);
  return <Snake tails={TailsState} />;
};
