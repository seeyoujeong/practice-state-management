import { Dispatch, SetStateAction, createContext } from "react";

interface LevelContextType {
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
}

const LevelContext = createContext<LevelContextType>({
  level: 1,
  setLevel: () => {},
});

export default LevelContext;
