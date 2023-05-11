class Person {
	#category;
	#name;
	#lastName;
	#age;

	static #counter = 0;

	constructor(category, name, lastName, age) {
		this.#category = category;
		this.#name = name;
		this.#lastName = lastName;
		this.#age = age;
		Person.counter++;
	}

	static get counter() {
		return Person.#counter;
	}

	static set counter(counter) {
		Person.#counter = counter;
	}

	get category() {
		return this.#category;
	}

	set category(category) {
		console.log(`Cant change ${category}`);
	}

	get name() {
		return `[${this.#name}]`;
	}

	set name(name) {
		console.log(
			`Vardas nebuvo pakeistas i '${name}'. Vardo keitimas nera galimas`
		);
	}

	get lastname() {
		return this.#lastName;
	}

	set lastname(lastname) {
		console.log(
			`Pavarde nebuvo pakeistas i '${lastname}'. Pavardes keitimas nera galimas`
		);
	}

	get age() {
		return this.#age;
	}

	set age(age) {
		this.#age = age;
	}
}

module.exports = Person;
