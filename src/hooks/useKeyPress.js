import { useEffect, useState } from "react";

export const useKeyPress = () => {
  const [keypressed, setKeyPressed] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const keyCode = state.key;

    switch (keyCode) {
      case "ArrowLeft":
        setKeyPressed("Left");
        break;
      case "ArrowRight":
        setKeyPressed("Right");
        break;
      case "ArrowUp":
        setKeyPressed("Up");
        break;
      case "ArrowDown":
        setKeyPressed("Down");
        break;
      default:
        setKeyPressed("Down");
        break;
    }
  }, [state]);

  return [keypressed, setState];
};
