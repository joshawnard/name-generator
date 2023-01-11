import { SelectedWordsInterface } from "../types/selectedWords";
import { FormattedWordStructures, RootWordsObjInterface } from "../interfaces/rootWordInterface";
import parseDataString from "./parseDataString";

const formatSelectedWords = (
  selectedWords: SelectedWordsInterface,
  rootWordsObj: RootWordsObjInterface,
): FormattedWordStructures => {
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

                return undefined;
              }),
            };
          }

          return undefined;
        })
      }

      return undefined;
    })
    .filter((value) => {
      // filters out undefined; breaks render name generator
      return !!value;
    });
  }

  return [];
};

export default formatSelectedWords;