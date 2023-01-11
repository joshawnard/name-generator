const parseEnglishString = (engString: string): string => {
  const splitString = engString.split(" ");

  if (splitString[0]) {
    if (["OE", "Scot"].includes(splitString[0])) {
      return splitString[2];
    }

    return splitString[0];
  }

  return engString;
};

export default parseEnglishString;