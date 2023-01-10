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
    // console.log(splitString[0])
    if (splitString[0] === "OE") {
      return splitString[2];
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
      <div style={{
          // display: "flex",
          // justifyContent: "center",
          // borderRight: "1px solid gray",
        }}
      >
        <div style={{
          borderBottom: "2px solid gray",
          maxHeight: "40vh",
          overflow: "scroll",
        }}
        >
          <WordSelectForm />
        </div>

        <GeneratorOutput />
      </div>
    </NameGeneratorContext.Provider>
  );
};

export default NameGenerator;