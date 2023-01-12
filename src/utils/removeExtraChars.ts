const removeExtraChars = (str: string) => {
  return str.replaceAll(/[$";,()?*-]/g, "")
};

export default removeExtraChars;