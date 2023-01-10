import { ParsedRootInterface } from "../interfaces/rootWordInterface";

const getWordInQuotes = (str: string) => {
  const match = str.match(/[^"]+(?=(" ")|"$)/g)

  if (match) {
    return match[0];
  }

  return "";
};

const parseDataString = (
  dataString: string | undefined,
  language: string,
): ParsedRootInterface | undefined => {
  if (dataString) {
    const splitString = dataString.split(" ");
    // TODO: split by language strings?
    // If celtic split by OIr or W?
    // Maybe leave this as a later feature?

    const defaultLanguageAndWord = {
      language: language,
      translation: splitString[1],
      englishMeaning: getWordInQuotes(dataString),
    }

    let languageAndWord: ParsedRootInterface = {
     language: language,
     translation: splitString[0],
     englishMeaning: splitString[2],
    };

    switch(language) {
      case "baltic":
        if (splitString[0] === "OPrus") {
           languageAndWord = {
             ...defaultLanguageAndWord,
             language: "old prussian",
             // translation: splitString[1],
             // englishMeaning: splitString[2],
           }
        }

        if (splitString[0] === "Lith") {
           languageAndWord = {
             ...defaultLanguageAndWord,
             language: "lithuanian",
             // translation: splitString[1],
             // englishMeaning: splitString[2],
           }
        }

        break;

      case "celtic":
       if (["OIr", "Old Irish"].includes(splitString[0])) {
         languageAndWord = {
           ...defaultLanguageAndWord,
           language: "old irish",
           // translation: splitString[1],
           // englishMeaning: splitString[2],
         }
       }

       if (["Gaul", "Gaul.", "Gaulish"].includes(splitString[0])) {
         languageAndWord = languageAndWord = {
           ...defaultLanguageAndWord,
           language: "gaulish",
           // translation: splitString[1],
           // englishMeaning: splitString[2],
         }
       }

       break;

      case "iranian":
       if (splitString[0] === "Av") {
         languageAndWord = languageAndWord = {
           ...defaultLanguageAndWord,
           language: "avestan",
           // translation: splitString[1],
           // englishMeaning: splitString[2],
         }
       }
       break;

      case "slavic":
       if (splitString[0] === "OCS") {
         languageAndWord = languageAndWord = {
           ...defaultLanguageAndWord,
           language: "old church slavonic",
           // translation: splitString[1],
           // englishMeaning: splitString[2],
         }
       }

       break;

      case "tocharian":
       if (splitString[0] === "A") {
         languageAndWord = languageAndWord = {
           ...defaultLanguageAndWord,
           language: "tocharian A",
           // translation: splitString[1],
           // englishMeaning: splitString[2],
         }
       }

       break;

      default:
       languageAndWord = {
         language: language,
         translation: splitString[0],
         englishMeaning: getWordInQuotes(dataString),
       };

       break;
    }

    return languageAndWord;
  }

  return undefined;
};

export default parseDataString;