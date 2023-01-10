import { ParsedRootInterface } from "../interfaces/rootWordInterface";

const parseDataString = (
  dataString: string | undefined,
  language: string,
): ParsedRootInterface | undefined => {
  if (dataString) {
   const splitString = dataString.split(" ");
    // TODO: split by language strings?
   // If celtic split by OIr or W?
   // Maybe leave this as a later feature?

   let languageAndWord: ParsedRootInterface = {
     language: language,
     translation: splitString[0],
     englishMeaning: splitString[2],
   };

   switch(language) {
     case "baltic":
       if (splitString[0] === "OPrus") {
         languageAndWord = {
           language: "old prussian",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }

       break;

     case "celtic":
       if (["OIr", "Old Irish"].includes(splitString[0])) {
         languageAndWord = {
           language: "old irish",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }

       if (["Gaul", "Gaul.", "Gaulish"].includes(splitString[0])) {
         languageAndWord = languageAndWord = {
           language: "gaulish",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }

       break;

     case "iranian":
       if (splitString[0] === "Av") {
         languageAndWord = languageAndWord = {
           language: "avestan",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }
       break;

     case "slavic":
       if (splitString[0] === "OCS") {
         languageAndWord = languageAndWord = {
           language: "old church slavonic",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }

       break;

     case "tocharian":
       if (splitString[0] === "A") {
         languageAndWord = languageAndWord = {
           language: "tocharian A",
           translation: splitString[1],
           englishMeaning: splitString[2],
         }
       }

       break;

     default:
       languageAndWord = {
         language: language,
         translation: splitString[0],
         englishMeaning: splitString[2],
       };

       break;
   }

    return languageAndWord;
  }

  return undefined;
};

export default parseDataString;