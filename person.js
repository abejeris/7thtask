const moment = require("moment");

class Person {
	#type;
	#name;
	#lastName;
	#age;
	#createdAt;

	static #counter = 0;

	constructor(type, name, lastName, age) {
		this.#type = type;
		this.#name = name;
		this.#lastName = lastName;
		this.#age = age;
		this.#createdAt = moment().format("YYYY-MM-DD HH:mm");
		Person.counter++;
	}

	get createdAt() {
		return this.#createdAt;
	}

	static get counter() {
		return Person.#counter;
	}

	static set counter(counter) {
		Person.#counter = counter;
	}

	get type() {
		return this.#type;
	}

	set type(type) {
		console.log(`Cant change ${type}`);
	}

	get name() {
		return this.#name;
	}

	set name(name) {
		console.log(
			`Vardas nebuvo pakeistas i '${name}'. Vardo keitimas nera galimas`
		);
	}

	get lastName() {
		return this.#lastName;
	}

	set lastName(lastName) {
		console.log(
			`Pavarde nebuvo pakeistas i '${lastName}'. Pavardes keitimas nera galimas`
		);
	}

	get age() {
		return this.#age;
	}

	set age(age) {
		this.#age = age;
	}

	getInfo() {
		return `Person is: ${this.#type}, name: ${this.#name}, last name is: ${
			this.#lastName
		}, and age is: ${this.#age}.`;
	}
}

module.exports = Person;
