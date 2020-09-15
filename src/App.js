import React, { useEffect, useState, useRef } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import SnakeGame from "./containers/snake-game";

function App() {
  return (
    <RecoilRoot>
      <SnakeGame />
    </RecoilRoot>
  );
}

export default App;
