

import React from "react";
import { useRecoilState } from "recoil";
import { Ghosts } from "../../components/ghost";
import { GhostState } from "../../models/atoms";
import {SpriteElement} from '../../models/dto'

export const GhostContainer = (): JSX.Element => {
  const [ghostPositions] = useRecoilState<SpriteElement[]>(GhostState);
  return <Ghosts ghosts={ghostPositions} />;
};
