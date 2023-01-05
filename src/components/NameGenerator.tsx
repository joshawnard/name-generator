import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import { SelectedWordsInterface } from "../types/selectedWords";

const initialSelectedWords = {
  kinship: [],
}

const NameGenerator = () => {
  const [selectedWords, setSelectedWords] = useState<SelectedWordsInterface>(initialSelectedWords);

  const setNameGeneratorContext = (): NameGeneratorContextInterface => {
    return {
      selectedWords,
      setSelectedWords,
    };
  };

  return (
    <NameGeneratorContext.Provider value={setNameGeneratorContext()}>
      <WordSelectForm />

    {/*  GeneratorOutput*/}
    </NameGeneratorContext.Provider>
  );
};

export default NameGenerator;