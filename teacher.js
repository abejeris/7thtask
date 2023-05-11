const Person = require("./person.js");

class Teacher extends Person {
	#university;
	#id;
	#salary;

	constructor(category, name, lastName, age, university, id, salary) {
		super(category, name, lastName, age);
		this.#university = university;
		this.#id = id;
		this.#salary = salary;
	}

	get university() {
		return this.#university;
	}

	set university(university) {
		this.#university = university;
	}

	get id() {
		return this.#id;
	}

	set id(id) {
		this.#id = id;
	}

	get salary() {
		return this.#salary;
	}

	set salary(salary) {
		this.#salary = salary;
	}
}

module.exports = Teacher;
