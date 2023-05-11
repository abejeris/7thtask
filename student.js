const Person = require("./person.js");

class Student extends Person {
	#id;
	#university;

	constructor(category, name, lastName, age, id, university) {
		super(category, name, lastName, age);
		this.#id = id;
		this.#university = university;
	}

	get id() {
		return this.#id;
	}

	set id(id) {
		this.#id = id;
	}

	get university() {
		return this.#university;
	}

	set university(university) {
		this.#university = university;
	}
}

module.exports = Student;
