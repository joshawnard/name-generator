interface RootObj {
  [key: string]: string;
  armenian: string;
  albanian: string;
  ancient_greek: string;
  baltic: string;
  english: string;
  old_english: string;
  old_irish: string;
  gaulish: string;
  gothic: string;
  hittite: string;
  iranian: string;
  latin: string;
  sanskrit: string;
  slavic: string;
  tocharian: string;
  welsh: string;
}

export interface RootWordsObjInterface {
  [key: string] : Partial<RootObj>[];
}

export interface EngWordsInterface {
  [key: string]: string[];
}

export interface ParsedRootInterface {
  language: string; // language
  translation: string; // word
  englishMeaning: string; // english meaning
}

export interface GeneratedName {
  [key: string]: ParsedRootInterface[];
}

