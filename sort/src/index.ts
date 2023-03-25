import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const characterCollection = new CharactersCollection("zacbIHkj");
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const numberSorter = new Sorter(numbersCollection);
const characterSorter = new Sorter(characterCollection);


numbersCollection.printData();
numberSorter.sort();
numbersCollection.printData();

characterCollection.printData();
characterSorter.sort();
characterCollection.printData();