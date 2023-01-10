import React, { useContext, useEffect, useState } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import formatSelectedWords from "../utils/formatSelectedWords";
import { GeneratedName, ParsedRootInterface } from "../interfaces/rootWordInterface";

// TODO:
// Add randomizer that constructs multiple roots together

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
    setGeneratedNames(() => {
      if (formattedWordStructures && formattedWordStructures[0]) {
        let generated: { [key: string]: ParsedRootInterface[] }[] = [];
        const structures = formattedWordStructures.flat();

        const numNames = 1000;
        Array.from(Array(numNames)).forEach((time) => {
          let numOfRoots = Math.floor(Math.random() * (structures.length));
          if (numOfRoots < 2) {
            numOfRoots = 2;
          }
          if (numOfRoots > 3) {
            numOfRoots = 3;
          }

          let nameKey = "";
          let rootsArr: ParsedRootInterface[] = [];

          for (let i = 0; i < numOfRoots; i++) {
            const randomStructureIndex = Math.floor(Math.random() * (structures.length));
            const randomStructure = structures[randomStructureIndex];

            if (randomStructure) {
              const translationList = Object.entries(randomStructure).map((entry) => {
                return entry[1].filter((element) => {
                  return element !== undefined;
                });
              })[0]

              const randomTranslationIndex = Math.floor(Math.random() * (translationList.length - 1));
              const translationObj = translationList[randomTranslationIndex];

              nameKey += translationObj?.translation.replaceAll(/[$;,(?*-]/g, "") || "";
              rootsArr.push(translationObj as ParsedRootInterface);
            }
          }

          const alreadyExists = !!generated.find((obj) => Object.keys(obj)[0] === nameKey);
          if (!alreadyExists) {
            generated.push({
              [nameKey]: rootsArr,
            });
          }
        })

        return generated;
      }

      return [];
    });
  }, [formattedWordStructures, selectedWords])

  const renderFormattedWords = (): JSX.Element | null => {
    if (formattedWordStructures) {
      return (
        <div style={{ display: "flex", justifyContent: "flex-start", textAlign: "left", flexWrap: "wrap" }}>
          {
            formattedWordStructures.map((formattedWord) => {
              if (formattedWord) {
                return formattedWord.map((word) => {
                  if (word) {
                    return Object.entries(word).map((list) => {
                      const englishWord = list[0];

                      return (
                        <div
                          key={englishWord}
                          style={{
                            margin: "0.5rem",
                          }}
                        >
                          <h4>
                            {englishWord}
                          </h4>

                          {
                            list[1].map((wordObj) => {
                              if (wordObj) {
                                const { language, translation, englishMeaning } = wordObj;

                                return (
                                  <div key={`${translation}-${language}`}>
                                    <strong>
                                      {translation}:
                                    </strong>
                                    {' '}
                                    <span>
                                      {language}
                                    </span>
                                    {' - '}
                                    <em>
                                      {englishMeaning || englishWord}
                                    </em>
                                  </div>
                                );
                              }
                            })
                          }
                        </div>
                      );
                    });
                  }
                });
              }
            })
          }
        </div>
      );
    }

    return null;
  };

  const renderGenerated = (): JSX.Element | null => {
    if (generatedNames.length) {
      return (
        <div>
          <h2>
            Names generated: {generatedNames.length}
          </h2>

          {
            generatedNames.map((generatedNameObj) => {
              const name = Object.keys(generatedNameObj)[0];
              const rootArr = Object.values(generatedNameObj)[0];

              return (
                <div
                  className="name-card"
                  key={name}
                >
                  <h3>
                    {name}
                  </h3>

                  <hr style={{ margin: "10px" }} />

                  {
                    rootArr.map((root, index) => {
                      return (
                        <div
                          key={`${name}-${root.translation}-${index}`}
                        >
                          <h4 style={{ marginBottom: "5px" }}>
                            {root.language}
                          </h4>

                          <small>
                            <strong>{root.translation}</strong> - <em>{root.englishMeaning}</em>
                          </small>
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      );
    }

    return null;
  };

  return (
    <div className="generated">
      {renderFormattedWords()}

      <hr style={{ margin: "1rem 0" }} />

      {renderGenerated()}
    </div>
  );
};

export default GeneratorOutput;