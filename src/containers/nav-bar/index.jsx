import React from "react";
import { useRecoilValue } from "recoil";
import { NavBar } from "../../components/nav-bar";

import { ScoreState } from "../../models/atoms";

export const NavBarContainer = () => {
  const score = useRecoilValue(ScoreState);

  return <NavBar score={score} />;
};
