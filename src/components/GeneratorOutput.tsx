import React, { useContext } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";

// TODO:
// Add randomizer that constructs multiple roots together

const GeneratorOutput = () => {
  const { rootWordsObj, selectedWords } = useContext(NameGeneratorContext);


  return (
    <div>
      {
        Object.entries(selectedWords).map((selectedWord) => {
          const type = selectedWord[0]; // kinship
          const list = selectedWord[1]; // ["mother"]

          if (list.length) {
            return (
              <>
                {
                  list.map((word) => {
                    const theOne = rootWordsObj[type].find((rootWordObj) => {
                      return rootWordObj.english?.includes(word);
                    });

                    if (theOne) {
                      return (
                        <>
                          <h3>{word}</h3>

                          {
                            Object.entries(theOne).map((entry) => {
                              return (
                                <div key={entry[0]}>
                                  <span><b>{entry[0]}</b></span>:
                                  {' '}
                                  <span>{entry[1]}</span>
                                </div>
                              );
                            })
                          }
                        </>
                      );
                    }

                    return null;
                  })
                }
              </>
            );
          }
        })
      }
    </div>
  );
};

export default GeneratorOutput;