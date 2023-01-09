import { createContext, Dispatch, SetStateAction } from "react";
import { SelectedWordsInterface } from "./types/selectedWords";

type rootString = string;

interface RootObj {
  [key: string]: rootString;
  armenian: rootString;
  albanian: rootString;
  ancient_greek: rootString;
  baltic: rootString;
  english: rootString;
  old_english: rootString;
  old_irish: rootString;
  gaulish: rootString;
  gothic: rootString;
  hittite: rootString;
  iranian: rootString;
  latin: rootString;
  sanskrit: rootString;
  slavic: rootString;
  tocharian: rootString;
  welsh: rootString;
}

interface RootWordsObjInterface {
  [key: string] : Partial<RootObj>[];
}

export interface NameGeneratorContextInterface {
  rootWordsObj: RootWordsObjInterface;
  selectedWords: SelectedWordsInterface;
  setSelectedWords: Dispatch<SetStateAction<SelectedWordsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;