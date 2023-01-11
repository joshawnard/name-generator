import React, { useContext, useEffect, useState } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import formatSelectedWords from "../utils/formatSelectedWords";
import { GeneratedName } from "../interfaces/rootWordInterface";
import renderFormattedWords from '../utils/renderFormattedWords';
import renderGenerated from "../utils/renderGeneratedNames";
import generateNames from "../utils/generateNames";

const GeneratorOutput = () => {
  const { rootWordsObj, selectedWords } = useContext(NameGeneratorContext);
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

  return (
    <div className="generated">
      {renderFormattedWords(formattedWordStructures)}

      <hr style={{ margin: "1rem 0" }} />

      {renderGenerated(generatedNames)}
    </div>
  );
};

export default GeneratorOutput;