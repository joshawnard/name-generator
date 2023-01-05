import React, { useContext } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import roots from "../root_words";

const GeneratorOutput = () => {
  const { selectedWords } = useContext(NameGeneratorContext);

  return (
    <div>
      {
        Object.entries(selectedWords).map((selectedWord) => {
          const type = selectedWord[0];
          const list = selectedWord[1];

          console.log(list);

          if (list.length) {
            return (
              <>
                {
                  list.map((word) => {
                    if (roots[type]) {
                      return Object.entries(roots[type]).map((wordName) => {
                        const engWord = wordName[0];
                        const translationObj = wordName[1];

                        return Object.entries(translationObj).map((langWord) => {
                          return (
                            <div key={langWord[0]}>
                              <h3>{engWord}</h3>

                              {
                                Object.entries(langWord[1]).map((foo) => {
                                  return (
                                    <div key={foo[0]}>
                                      {/*{foo[0]}*/}
                                      {
                                        foo[1] && foo[1].length && (
                                          <div>
                                            {foo[1][0]}
                                          </div>
                                        )
                                      }
                                    </div>
                                  );
                                })
                              }
                            </div>
                          );
                        })
                      })
                    }
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