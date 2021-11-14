import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Snake } from "../../components/snake";
import { SnakeTailState, KeyPressState } from "../../models/atoms";
import {Positions} from '../../models/dto'

export const SnakeContainer = (): JSX.Element => {
  const [keyPressed, setKeyPressed] = useKeyPress();
  const [TailsState] = useRecoilState<Positions[]>(SnakeTailState);
  const setKeyPressState = useSetRecoilState(KeyPressState);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      setKeyPressed(event.key)
    });
  }, []);

  useEffect(() => {
    
    setKeyPressState(keyPressed);
  }, [keyPressed]);

  return <Snake tails={TailsState} />;
};
