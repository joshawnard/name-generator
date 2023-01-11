import {
  ParsedRootInterface
} from "../interfaces/rootWordInterface";
import getWordsInQuotes from "./getWordsInQuotes";

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
      englishMeaning: getWordsInQuotes(dataString),
    }

    let languageAndWord: ParsedRootInterface = {
      language: language,
      translation: splitString[0],
      englishMeaning: getWordsInQuotes(dataString),
    };

    switch (language) {
      case "ancient greek":
        if (["Att"].includes(splitString[0])) {
           languageAndWord = {
            ...defaultLanguageAndWord,
            language: "attic greek",
          }
        }

        if (["Doric"].includes(splitString[0])) {
           languageAndWord = {
            ...defaultLanguageAndWord,
            language: "doric",
          }
        }

        if (["Myc"].includes(splitString[0])) {
           languageAndWord = {
            ...defaultLanguageAndWord,
            language: "mycenaean",
          }
        }

        break;

      case "baltic":
        if (["OPrus", "OP"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old prussian",
          }
        }

        if (["Lith", "OLith"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "lithuanian",
          }
        }

        if (["Latv", "Latvian"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "latvian",
          }
        }

        break;

      case "celtic":
        if (["OIr", "OI", "Old Irish"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old irish",
          }
        }

        if (["Gaul", "Gaul.", "Gaulish"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "gaulish",
          }
        }

        if (["W"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "welsh",
          }
        }

        if (["MWel"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "middle welsh",
          }
        }

        if (["MBret"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "breton",
          }
        }

        break;

      case "english":
        if (["OE"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old english",
          }
        }

        break;

      case "gothic":
        if (splitString[0] === "ON") {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old norse",
          }
        }

        if (["OHG"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old high german",
          }
        }

        if (["Ger"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "german",
          }
        }

        break;

      case "hittite":
        if (["Luwian", "HLuw"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "luwian",
          }
        }

        if (["Hitt", "Hitt."].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "hittite",
          }
        }

        break;

      case "iranian":
        if (splitString[0] === "Av") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "avestan",
          }
        }

        if (splitString[0] === "Old") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old iranian",
            translation: splitString[2],
          }
        }

        if (splitString[0] === "Proto-Iranian") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "proto-iranian",
          }
        }

        break;

      case "latin":
        if (["Osc", "Oscan"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "oscan",
          }
        }

        if (["Umbrian"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "umbrian",
          }
        }

        break;

      case "slavic":
        if (splitString[0] === "OCS") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old church slavonic",
          }
        }

        if (["Russ", "Russ."].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "russian",
          }
        }

        break;

      case "tocharian":
        if (splitString[0] === "A") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "tocharian A",
          }
        }

        break;

      default:
        languageAndWord = {
          language: language,
          translation: splitString[0],
          englishMeaning: getWordsInQuotes(dataString),
        };

        break;
    }

    return languageAndWord;
  }

  return undefined;
};

export default parseDataString;