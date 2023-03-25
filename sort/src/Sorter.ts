interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract printData(): void;
	abstract length: number;

	sort(): void {
		const { length } = this;

		console.log('======== Sorting ========');
		this.printData();

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}

		console.log('====== Sorted Data ======');
		this.printData();
		console.log('=========================\n');
	}
}
