export type wordType = 'kinship';

export type SelectedWordsInterface = {
  [key in wordType]: string[];
}