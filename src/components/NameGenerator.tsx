import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import { SelectedWordsInterface } from "../types/selectedWords";
import GeneratorOutput from "./GeneratorOutput";
import rootWordsObj from "../root_words/rootWords";
import { EngWordsInterface } from "../interfaces/rootWordInterface";

const parseEnglishString = (engString: string): string => {
  const splitString = engString.split(" ");

  if (splitString[0]) {
    if (splitString[0] === "OE") {
      return splitString[1];
    }

    return splitString[0];
  }

  return engString;
};

const engWordsArr = Object.keys(rootWordsObj).map((category) => {
  return {
    [category]: rootWordsObj[category].map((rootWordObj) => {
      return parseEnglishString(rootWordObj.english);
    })
  }
});

const NameGenerator = () => {
  const [selectedWords, setSelectedWords] = useState<SelectedWordsInterface>({});
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