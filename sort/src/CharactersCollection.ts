export class CharactersCollection {
	constructor(public data: string) {}

	get length(): number {
		return this.data.length;
	}

    printData(): void {
        console.log(`Characters Data: ${this.data}`)
    }

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() >
			this.data[rightIndex].toLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split('');
		const leftTemp = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = leftTemp;

		this.data = characters.join('');
	}
}