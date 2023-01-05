import { kinshipObj } from "./kinship/kinship";
import { RootWord } from "../interfaces/rootWordInterface";

// interface rootsInterface {
//   [key in wordType]: Root
// }

const roots: { [key: string]: { [key: string]: RootWord } }  = {
  "kinship": kinshipObj,
};

export default roots;