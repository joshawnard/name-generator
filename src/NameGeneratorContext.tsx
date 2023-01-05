import { createContext, Dispatch, SetStateAction } from "react";
import { SelectedWordsInterface } from "./types/selectedWords";

export interface NameGeneratorContextInterface {
  selectedWords: SelectedWordsInterface;
  setSelectedWords: Dispatch<SetStateAction<SelectedWordsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;