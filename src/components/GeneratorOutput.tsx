import React, { useContext, useEffect, useState } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import formatSelectedWords from "../utils/formatSelectedWords";

// TODO:
// Add randomizer that constructs multiple roots together

const GeneratorOutput = () => {
  const { rootWordsObj, selectedWords } = useContext(NameGeneratorContext);
  const [formattedWordStructures, setFormattedWordStructures] = useState(
    formatSelectedWords(selectedWords, rootWordsObj),
  );

  useEffect(() => {
    setFormattedWordStructures(
      formatSelectedWords(selectedWords, rootWordsObj),
    );
  }, [rootWordsObj, selectedWords])

  // TODO:
  // Write name generator function that formats names and stores the roots:
  // EX:
  // const generatedNames = [
  //   {
  //     "generatedName": [
  //       {
  //         root: "generated",
  //         language: "old irish",
  //         englishMeaning: "to generate",
  //       },
  //       {
  //         root: "Name",
  //         language: "old church slavonic",
  //         englishMeaning: "to name",
  //       },
  //     ],
  //   }
  // ];

  const renderFormattedWords = (): JSX.Element | null => {
    if (formattedWordStructures) {
      return (
        <div>
          {
            formattedWordStructures.map((formattedWord) => {
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
                            list[1].map((wordObj) => {
                              if (wordObj) {
                                const { language, translation, englishMeaning } = wordObj;

                                return (
                                  <div key={translation}>
                                    <span>
                                      {language}:
                                    </span>
                                    {' '}
                                    <span>
                                      {translation}
                                    </span>
                                    {' '}
                                    <span>
                                      {englishMeaning}
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
      {renderFormattedWords()}
    </div>
  );
};

export default GeneratorOutput;

// const renderSelectedWords = () => {
//   return Object.entries(selectedWords).map((selectedWord) => {
//     const type = selectedWord[0];
//     const list = selectedWord[1];
//
//     if (list.length) {
//       return (
//         <div key={type}>
//           {
//             list.map((word) => {
//               const theOne = rootWordsObj[type].find((rootWordObj) => {
//                 return rootWordObj.english?.includes(word);
//               });
//
//               if (theOne) {
//                 return (
//                   <div key={word}>
//                     <h3>{word}</h3>
//
//                     {
//                       Object.entries(theOne).map((entry) => {
//                         return (
//                           <div key={entry[0]}>
//                             <span><b>{entry[0]}</b></span>:
//                             {' '}
//                             <span>{entry[1]}</span>
//                           </div>
//                         );
//                       })
//                     }
//                   </div>
//                 );
//               }
//
//               return null;
//             })
//           }
//         </div>
//       );
//     }
//   })
// };