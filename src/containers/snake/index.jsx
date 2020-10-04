import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Snake } from "../../components/snake";
import { SnakeTailState, KeyPressState } from "../../models/atoms";

export const SnakeContainer = () => {
  const [keyPressed, setKeyPressed] = useKeyPress();
  const [TailsState] = useRecoilState(SnakeTailState);
  const setKeyPressState = useSetRecoilState(KeyPressState);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      setKeyPressed(event);
    });
  }, []);

  useEffect(() => {
    setKeyPressState(keyPressed);
  }, [keyPressed]);

  return <Snake tails={TailsState} />;
};
