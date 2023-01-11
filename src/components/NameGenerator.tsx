import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import { SelectedWordsInterface } from "../types/selectedWords";
import GeneratorOutput from "./GeneratorOutput";
import rootWordsObj from "../root_words/rootWords";
import { EngWordsInterface } from "../interfaces/rootWordInterface";
import { SettingsInterface } from "../interfaces/settingsInterfaces";
import Settings from "./Settings";
import parseEnglishString from "../utils/parseEnglishString";

const engWordsArr = Object.keys(rootWordsObj).map((category) => {
  return {
    [category]: rootWordsObj[category].map((rootWordObj) => {
      // const wordsInQuotes = getWordsInQuotes(rootWordObj.english);
      //
      // if (wordsInQuotes) {
      //   return wordsInQuotes;
      // }

      return parseEnglishString(rootWordObj.english);
    })
  }
});

// TODO: features
// Parse , left off at Bodily functions and states
// min roots for construction
// max roots for construction

const NameGenerator = () => {
  const [selectedWords, setSelectedWords] = useState<SelectedWordsInterface>({});
  const [engWords, setEngWords] = useState<EngWordsInterface[]>(
    engWordsArr,
  );
  const [settings, setSettings] = useState<SettingsInterface>({
    showFormattedWords: true,
  })

  const setNameGeneratorContext = (): NameGeneratorContextInterface => {
    return {
      engWords,
      rootWordsObj,
      selectedWords,
      setSelectedWords,
      settings,
      setSettings,
    };
  };

  return (
    <NameGeneratorContext.Provider value={setNameGeneratorContext()}>
      <div className="settings">
        <Settings />
      </div>

      <div className="page-wrapper">
        <div className="word-select">
          <WordSelectForm />
        </div>

        <div className="generated">
          <GeneratorOutput />
        </div>
      </div>
    </NameGeneratorContext.Provider>
  );
};

export default NameGenerator;