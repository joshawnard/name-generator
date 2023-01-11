import React, { useContext, useEffect, useState } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import formatSelectedWords from "../utils/formatSelectedWords";
import { GeneratedName } from "../interfaces/rootWordInterface";
import renderFormattedWords from '../utils/renderFormattedWords';
import renderGenerated from "../utils/renderGeneratedNames";
import generateNames from "../utils/generateNames";

const GeneratorOutput = () => {
  const {
    rootWordsObj,
    selectedWords,
    settings: { showFormattedWords },
  } = useContext(NameGeneratorContext);
  const [formattedWordStructures, setFormattedWordStructures] = useState(
    formatSelectedWords(selectedWords, rootWordsObj),
  );
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);

  useEffect(() => {
    setFormattedWordStructures(
      formatSelectedWords(selectedWords, rootWordsObj),
    );
  }, [rootWordsObj, selectedWords])

  useEffect(() => {
    setGeneratedNames(generateNames(formattedWordStructures));
  }, [formattedWordStructures, selectedWords])

  const formattedWordsStyle = {
    display: showFormattedWords ? "flex" : "none",
    height: showFormattedWords ? "95vh" : 0,
  };

  const generatedNamesStyle = {
    height: showFormattedWords ? "65vh" : "90vh",
  };

  return (
    <>
      <div
        className="formatted-word-wrapper"
        style={formattedWordsStyle}
      >
        {renderFormattedWords(formattedWordStructures)}
      </div>

      <div
        className="generated-names-wrapper"
        style={generatedNamesStyle}
      >
        {renderGenerated(generatedNames)}
      </div>
    </>
  );
};

export default GeneratorOutput;