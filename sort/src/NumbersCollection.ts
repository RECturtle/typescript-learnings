import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    printData(): void {
        console.log(`Numbers Data: ${this.data}`)
    }

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

    swap(leftIndex: number, rightIndex: number): void {
        const leftTemp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftTemp;
    }
}
