import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	phrase: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = faker.name.firstName();
		this.phrase = faker.hacker.phrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
            <div>
                <h1>User</h1>
                <p><b>Name:</b> ${this.name}</p>
                <p><b>Leet Hacker Phrase:</b> ${this.phrase}</p>
        `;
	}
}
