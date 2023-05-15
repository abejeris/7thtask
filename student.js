const Person = require("./person.js");

class Student extends Person {
	#id;
	#university;

	static #studentCounter = 0;

	constructor(category, name, lastName, age, id, university) {
		super(category, name, lastName, age);
		this.#id = id;
		this.#university = university;
		Student.studentCounter++;
	}

	static get studentCounter() {
		return Student.#studentCounter;
	}

	static set studentCounter(studentCounter) {
		Student.#studentCounter = studentCounter;
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

	getInfo() {
		return (
			super.getInfo() +
			` Persons ID is: ${this.#id} and the university is ${this.#university}.`
		);
	}
}

module.exports = Student;
