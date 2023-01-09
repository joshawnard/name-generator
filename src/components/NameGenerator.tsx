import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import { SelectedWordsInterface } from "../types/selectedWords";
import GeneratorOutput from "./GeneratorOutput";
import rootWordsObj from "../root_words/rootWords";
import { EngWordsInterface } from "../interfaces/rootWordInterface";

const initialSelectedWords = {
  kinship: [],
}

const engWordsArr = Object.keys(rootWordsObj).map((category) => {
  return {
    [category]: rootWordsObj[category].map((rootWordObj) => {
      return rootWordObj.english;
    })
  }
});

console.log(engWordsArr);

const NameGenerator = () => {
  const [selectedWords, setSelectedWords] = useState<SelectedWordsInterface>(initialSelectedWords);
  const [engWords, setEngWords] = useState<EngWordsInterface[]>(
    engWordsArr,
  );

  const setNameGeneratorContext = (): NameGeneratorContextInterface => {
    return {
      engWords,
      rootWordsObj,
      selectedWords,
      setSelectedWords,
    };
  };

  return (
    <NameGeneratorContext.Provider value={setNameGeneratorContext()}>
      <WordSelectForm />

      <hr style={{ marginTop: "1vh", marginBottom: "1vh" }} />

      <GeneratorOutput />
    </NameGeneratorContext.Provider>
  );
};

export default NameGenerator;