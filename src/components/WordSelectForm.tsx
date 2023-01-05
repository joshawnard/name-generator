import React, { useContext } from 'react';
import kinshipWords from "../root_words/kinship/kinship";
import { wordType } from "../types/selectedWords";
import NameGeneratorContext from "../NameGeneratorContext";

const WordSelectForm = (): JSX.Element => {
  const { selectedWords, setSelectedWords } = useContext(NameGeneratorContext);

  const handleCheck = (type: wordType, word: string) => {
    setSelectedWords({
      ...selectedWords,
      [type]: [
        ...selectedWords[type],
        word,
      ],
    });
  };

  return (
    <div>
      <div>
        <h3>
          Kinship
        </h3>

        {
          kinshipWords.map((wordObj) => {
            const word = Object.keys(wordObj)[0];

            return (
              <div>
                <label>
                  <input
                    name={word}
                    onChange={() => handleCheck("kinship", word)}
                    type="checkbox"
                  />

                  {word}
                </label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default WordSelectForm;