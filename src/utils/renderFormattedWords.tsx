import React from "react";
import { FormattedWordStructures } from "../interfaces/rootWordInterface";

const renderFormattedWords = (
  formattedWordStructures: FormattedWordStructures,
): JSX.Element | null => {
  if (formattedWordStructures) {
    return (
      <>
        {
          formattedWordStructures.map((formattedWord) => {
            if (formattedWord) {
              return formattedWord.map((word) => {
                if (word) {
                  return Object.entries(word).map((list) => {
                    const englishWord = list[0];

                    // TODO: table format?
                    return (
                      <div
                        className="formatted-word"
                        key={englishWord}
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
      </>
    );
  }

  return null;
};

export default renderFormattedWords;