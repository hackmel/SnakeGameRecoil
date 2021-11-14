import { useEffect, useState } from "react";

export const useKeyPress = () : [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [keypressed, setDirection] = useState<string>('');
  const [keyCode, setKeyCode] = useState<string>('');

  useEffect(() => {
  
    switch (keyCode) {
      case "ArrowLeft":
        setDirection("Left");
        break;
      case "ArrowRight":
        setDirection("Right");
        break;
      case "ArrowUp":
        setDirection("Up");
        break;
      case "ArrowDown":
        setDirection("Down");
        break;
      default:
        setDirection("Down");
        break;
    }
  }, [keyCode]);

  return [keypressed, setKeyCode];
};
