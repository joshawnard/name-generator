import {
  ParsedRootInterface
} from "../interfaces/rootWordInterface";
import getWordsInQuotes from "./getWordsInQuotes";
import removeExtraChars from "./removeExtraChars";

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

        if (["Myc", "MycGr"].includes(splitString[0])) {
           languageAndWord = {
            ...defaultLanguageAndWord,
            language: "mycenaean",
          }
        }

        break;

      case "armenian":
        if (["OArm"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "classical armenian",
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

        if (["MIr"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "middle irish",
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

        if (["MWel", "MW"].includes(splitString[0])) {
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

        if (["Scot"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "scottish english",
          }
        }

        break;

      case "gothic":
        if (["ON", "Nor"].includes(splitString[0])) {
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

        if (["OldSaxon"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old saxon",
          }
        }

        if (["Yiddish"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "yiddish",
          }
        }

        break;

      case "hittite":
        if (["Luwian", "HLuw", "Luw", "HierLuv", "Luvian"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "luwian",
          }
        }

        if (["Hitt", "Hitt.", "Hittite"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "hittite",
          }
        }

        if (["Lydian"].includes(splitString[0])) {
          languageAndWord = {
            ...defaultLanguageAndWord,
            language: "lydian",
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

        if (["Wakhi"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "Wakhi",
          }
        }

        if (["Ossetic", "Oss"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "ossetian",
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

        if (["NPers"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "dari, new persian",
          }
        }

        if (["Persian"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "farsi",
          }
        }

        if (["OPers"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old persian",
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

      case "sanskrit":
        if (["Ved"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "vedic",
          }
        }

        break;

      case "slavic":
        if (["OCS", "OSl"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old church slavonic",
          }
        }

        if (["OldSorbian"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "old sorbian",
          }
        }

        if (["Russ", "Russ."].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "russian",
          }
        }

        if (["Croatian"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "croatian",
          }
        }

        if (["Bulg"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "bulgarian",
          }
        }

        if (["Ukr"].includes(splitString[0])) {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "ukranian",
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

        if (splitString[0] === "B") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "tocharian B",
          }
        }

        if (splitString[0] === "AB") {
          languageAndWord = languageAndWord = {
            ...defaultLanguageAndWord,
            language: "tocharian A/B",
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

    return {
      language: removeExtraChars(languageAndWord.language),
      translation: removeExtraChars(languageAndWord.translation),
      englishMeaning: languageAndWord.englishMeaning,
    };
  }

  return undefined;
};

export default parseDataString;