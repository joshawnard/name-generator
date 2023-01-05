import { RootWord } from "../../interfaces/rootWordInterface";
import mother from "./mother";

const kinshipWords: RootWord[] = [
  mother,
];

export const kinshipObj: { [key: string]: RootWord } = {
  mother: mother,
}

export default kinshipWords;