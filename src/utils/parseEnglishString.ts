import removeExtraChars from "./removeExtraChars";

const parseEnglishString = (engString: string): string => {
  const splitString = engString.split(" ");

  let parsedString = splitString[0];
  if (splitString[0]) {
    if (["OE", "Scot"].includes(splitString[0])) {
      parsedString = splitString[2];
    } else {
      parsedString = splitString[0];
    }
  }

  if (parsedString) {
    return removeExtraChars(parsedString);
  }

  return parsedString;
};

export default parseEnglishString;