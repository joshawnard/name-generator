import React from "react";
import { FormattedWordStructures } from "../interfaces/rootWordInterface";

const renderFormattedWords = (
  formattedWordStructures: FormattedWordStructures,
): JSX.Element | null => {
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

export default renderFormattedWords;