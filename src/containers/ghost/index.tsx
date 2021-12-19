

import React from "react";
import { useRecoilState } from "recoil";
import { Ghosts } from "../../components/ghost";
import { GhostState } from "../../models/atoms";
import {Positions} from '../../models/dto'

export const GhostContainer = (): JSX.Element => {
  const [ghostPositions] = useRecoilState<Positions[]>(GhostState);
  return <Ghosts items={ghostPositions} />;
};
