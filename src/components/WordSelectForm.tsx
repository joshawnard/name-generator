import React, { ChangeEvent, useContext } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import rootWordsObj from "../root_words/rootWords";

const WordSelectForm = (): JSX.Element => {
  const { engWords, selectedWords, setSelectedWords } = useContext(NameGeneratorContext);
  const flattenedSelectedWordList = Object.values(selectedWords).flat();

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, type: string, word: string) => {
    const { currentTarget: { checked } } = e;

    if (checked && selectedWords[type]) {
      setSelectedWords({
        ...selectedWords,
        [type]: [
          ...selectedWords[type],
          word,
        ],
      });
    } else if (checked) {
      setSelectedWords({
        ...selectedWords,
        [type]: [
          word,
        ],
      });
    } else {
      let words = selectedWords[type]
      const index = words.indexOf(word, 0);

      if (index > -1) {
         words.splice(index, 1);
      }

      setSelectedWords({
        ...selectedWords,
        [type]: [...words],
      });
    }
  };

  return (
    <div>
      <div>
        {
          engWords.map((engWordCategory) => {
            return Object.entries(engWordCategory).map((foo) => {
              const [category, wordObjArr] = foo;

              return (
                <div key={category}>
                  <h3>{category}</h3>

                  {
                    wordObjArr.map((word, index) => {
                      if (word) {
                        return (
                          <div key={`word-${index}`}>
                            <label>
                              <input
                                checked={flattenedSelectedWordList.includes(word)}
                                name={word}
                                onChange={(e) => handleCheck(e, category, word)}
                                type="checkbox"
                              />

                              {word}
                            </label>
                          </div>
                        );
                      }

                      return null;
                    })
                  }
                </div>
              );
            })
          })
        }
      </div>
    </div>
  );
};

export default WordSelectForm;