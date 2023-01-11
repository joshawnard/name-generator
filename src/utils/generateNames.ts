import { FormattedWordStructures, GeneratedName, ParsedRootInterface } from "../interfaces/rootWordInterface";
import removeExtraChars from "./removeExtraChars";

const generateNames = (
  formattedWordStructures: FormattedWordStructures,
): GeneratedName[] => {
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

          nameKey += translationObj?.translation ? removeExtraChars(translationObj.translation) : "";
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
};

export default generateNames;