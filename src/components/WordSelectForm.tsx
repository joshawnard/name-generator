import React, { ChangeEvent, useContext, useEffect } from 'react';
import { wordType } from "../types/selectedWords";
import NameGeneratorContext from "../NameGeneratorContext";

const WordSelectForm = (): JSX.Element => {
  const { selectedWords, setSelectedWords } = useContext(NameGeneratorContext);



  const handleCheck = (e: ChangeEvent<HTMLInputElement>, type: wordType, word: string) => {
    const { currentTarget: { checked } } = e;

    if (checked) {
      setSelectedWords({
        ...selectedWords,
        [type]: [
          ...selectedWords[type],
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
        Here!
      </div>

      {/*<div>*/}
      {/*  <h3>*/}
      {/*    Kinship*/}
      {/*  </h3>*/}

      {/*  {*/}
      {/*    kinshipWords.map((wordObj) => {*/}
      {/*      const word = Object.keys(wordObj)[0];*/}

      {/*      return (*/}
      {/*        <div key={word}>*/}
      {/*          <label>*/}
      {/*            <input*/}
      {/*              name={word}*/}
      {/*              onChange={(e) => handleCheck(e, "kinship", word)}*/}
      {/*              type="checkbox"*/}
      {/*            />*/}

      {/*            {word}*/}
      {/*          </label>*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })*/}
      {/*  }*/}
      {/*</div>*/}
    </div>
  );
};

export default WordSelectForm;