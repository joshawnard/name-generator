import React, { useContext } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";

// TODO:
// Add randomizer that constructs multiple roots together

const parseDataString = (
  dataString: string | undefined,
  language: string,
): [
  string, // language
  string, // word
  string, // english meaning
] | undefined => {
  if (dataString) {
   const splitString = dataString.split(" ");
   let languageAndWord: [string, string, string] = [
     language,
     splitString[0],
     splitString[2],
   ];

   switch(language) {
     case "baltic":
       if (splitString[0] === "OPrus") {
         languageAndWord = [
           "old prussian",
           splitString[1],
           splitString[2]
         ];
       }
       break;

     case "celtic":
       if (splitString[0] === "OIr") {
         languageAndWord = [
           "old irish",
           splitString[1],
           splitString[2]
         ];
       }
       break;

     case "slavic":
       if (splitString[0] === "OCS") {
         languageAndWord = [
           "old church slavonic",
           splitString[1],
           splitString[2],
         ];
       }
       break;

     case "tocharian":
       if (splitString[0] === "A") {
         languageAndWord = [
           "tocharian A",
           splitString[1],
           splitString[2],
         ];
       }
       break;

     default:
       languageAndWord = [
         language,
         splitString[0],
         splitString[2],
       ]
       break;
   }

    return languageAndWord;
  }

  return undefined;
};

const GeneratorOutput = () => {
  const { rootWordsObj, selectedWords } = useContext(NameGeneratorContext);

  const formatSelectedWords = () => {
    const selectedEntries = Object.entries(selectedWords);

    if (selectedEntries.length) {
      return Object.entries(selectedWords).map((selectedWord) => {
        const type = selectedWord[0];
        const list = selectedWord[1];

        if (list.length) {
          return list.map((word) => {
            const theOne = rootWordsObj[type].find((rootWordObj) => {
              return rootWordObj.english?.includes(word);
            });

            if (theOne) {
              return {
                [word]: Object.entries(theOne).map((entry) => {
                  const parsedWordAndLanguage = parseDataString(entry[1], entry[0]);

                  if (parsedWordAndLanguage) {
                    return parsedWordAndLanguage;
                  }
                }),
              };
            }
          })
        }
      });
    }

    return null;
  };

  const renderSelectedWords = () => {
    return Object.entries(selectedWords).map((selectedWord) => {
      const type = selectedWord[0];
      const list = selectedWord[1];

      if (list.length) {
        return (
          <div key={type}>
            {
              list.map((word) => {
                const theOne = rootWordsObj[type].find((rootWordObj) => {
                  return rootWordObj.english?.includes(word);
                });

                if (theOne) {
                  return (
                    <div key={word}>
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
                    </div>
                  );
                }

                return null;
              })
            }
          </div>
        );
      }
    })
  };

  const renderFormattedWords = (): JSX.Element | null => {
    const formatted = formatSelectedWords();

    if (formatted) {
      return (
        <div>
          {
            formatted.map((formattedWord) => {
              if (formattedWord) {
                return formattedWord.map((word) => {
                  if (word) {
                    return Object.entries(word).map((list) => {
                      const englishWord = list[0];

                      return (
                        <div key={englishWord}>
                          <h4>
                            {englishWord}
                          </h4>

                          {
                            list[1].map((wordArr) => {
                              if (wordArr) {
                                const [lang, translation, engMeaning] = wordArr;

                                return (
                                  <div key={translation}>
                                    <span>
                                      {lang}:
                                    </span>
                                    {' '}
                                    <span>
                                      {translation}
                                    </span>
                                    {' '}
                                    <span>
                                      {engMeaning}
                                    </span>
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

  return (
    <div>
      {/*{renderSelectedWords()}*/}

      {renderFormattedWords()}
    </div>
  );
};

export default GeneratorOutput;