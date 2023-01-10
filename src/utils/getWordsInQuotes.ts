const getWordsInQuotes = (str: string) => {
  const match = str.match(/[^"]+(?=(" ")|"$)/g)

  if (match) {
    return match[0];
  }

  return "";
};

export default getWordsInQuotes;