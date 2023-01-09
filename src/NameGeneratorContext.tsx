import { createContext, Dispatch, SetStateAction } from "react";
import { SelectedWordsInterface } from "./types/selectedWords";
import { EngWordsInterface, RootWordsObjInterface } from "./interfaces/rootWordInterface";



export interface NameGeneratorContextInterface {
  engWords: EngWordsInterface[];
  rootWordsObj: RootWordsObjInterface;
  selectedWords: SelectedWordsInterface;
  setSelectedWords: Dispatch<SetStateAction<SelectedWordsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;