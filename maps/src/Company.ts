import { faker } from '@faker-js/faker';

export class Company {
	name: string;
	catchphrase: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = faker.company.name();
		this.catchphrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
}
