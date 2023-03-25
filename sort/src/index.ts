import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedLIst";
import { NumbersCollection } from "./NumbersCollection";

const characterCollection = new CharactersCollection("zacbIHkj");
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

characterCollection.sort();
numbersCollection.sort();
linkedList.sort();
