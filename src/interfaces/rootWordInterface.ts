type rootArray = [
  string | null, // word
  string | null, // translation description
]

interface RootObj {
  [key: string]: rootArray,
  armenian: rootArray,
  albanian: rootArray,
  ancient_greek: rootArray,
  baltic: rootArray,
  old_english: rootArray,
  old_irish: rootArray,
  gaulish: rootArray,
  gothic: rootArray,
  hittite: rootArray,
  iranian: rootArray,
  latin: rootArray,
  sanskrit: rootArray,
  slavic: rootArray,
  tocharian: rootArray,
  welsh: rootArray,
}

export type RootWord = Partial<RootObj>;

