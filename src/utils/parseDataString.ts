const parseDataString = (
  dataString: string | undefined,
  language: string,
): [
  string, // language
  string, // word
  string, // english meaning
] | undefined => {
  if (dataString) {
   const splitString = dataString.split(" ");
   let languageAndWord: [string, string, string] = [
     language,
     splitString[0],
     splitString[2],
   ];

   switch(language) {
     case "baltic":
       if (splitString[0] === "OPrus") {
         languageAndWord = [
           "old prussian",
           splitString[1],
           splitString[2]
         ];
       }
       break;

     case "celtic":
       if (["OIr", "Old Irish"].includes(splitString[0])) {
         languageAndWord = [
           "old irish",
           splitString[1],
           splitString[2]
         ];
       }

       if (["Gaul", "Gaul.", "Gaulish"].includes(splitString[0])) {
         languageAndWord = [
           "gaulish",
           splitString[1],
           splitString[2]
         ];
       }

       break;

     case "iranian":
       if (splitString[0] === "Av") {
         languageAndWord = [
           "avestan",
           splitString[1],
           splitString[2],
         ];
       }
       break;

     case "slavic":
       if (splitString[0] === "OCS") {
         languageAndWord = [
           "old church slavonic",
           splitString[1],
           splitString[2],
         ];
       }
       break;

     case "tocharian":
       if (splitString[0] === "A") {
         languageAndWord = [
           "tocharian A",
           splitString[1],
           splitString[2],
         ];
       }
       break;

     default:
       languageAndWord = [
         language,
         splitString[0],
         splitString[2],
       ]
       break;
   }

    return languageAndWord;
  }

  return undefined;
};

export default parseDataString;