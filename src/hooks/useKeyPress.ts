import { useEffect, useState } from "react";
import {KeyPressType, Direction} from '../enum'

export const useKeyPress = () : [Direction, React.Dispatch<React.SetStateAction<KeyPressType>>] => {
  const [keypressed, setDirection] = useState<Direction>(Direction.Unknown);
  const [keyCode, setKeyCode] = useState<KeyPressType>(KeyPressType.NoKeys);

  useEffect(() => {
  
    switch (keyCode) {
      case KeyPressType.ArrowLeft:
        setDirection(Direction.Left);
        break;
      case KeyPressType.ArrowRight:
        setDirection(Direction.Right);
        break;
      case KeyPressType.ArrowUp:
        setDirection(Direction.Up);
        break;
      case KeyPressType.ArrowDown:
        setDirection(Direction.Down);
        break;
      case KeyPressType.SpaceBar:
        setDirection(Direction.Paused);
        break;
      case KeyPressType.Enter:
          setDirection(Direction.Enter);
          break;
      default:
        setDirection(Direction.Unknown);
        break;
      
    }
  }, [keyCode]);

  return [keypressed, setKeyCode];
};
