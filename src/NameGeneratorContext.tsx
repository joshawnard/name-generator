import { createContext, Dispatch, SetStateAction } from "react";
import { SelectedWordsInterface } from "./types/selectedWords";
import { EngWordsInterface, RootWordsObjInterface } from "./interfaces/rootWordInterface";
import { SettingsInterface } from "./interfaces/settingsInterfaces";

export interface NameGeneratorContextInterface {
  engWords: EngWordsInterface[];
  rootWordsObj: RootWordsObjInterface;
  selectedWords: SelectedWordsInterface;
  setSelectedWords: Dispatch<SetStateAction<SelectedWordsInterface>>;
  settings: SettingsInterface;
  setSettings: Dispatch<SetStateAction<SettingsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;