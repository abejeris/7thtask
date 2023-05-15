const Person = require("./person.js");

class Teacher extends Person {
	#id;
	#university;
	#salary;

	static #teacherCounter = 0;

	constructor(category, name, lastName, age, id, university, salary) {
		super(category, name, lastName, age);
		this.#id = id;
		this.#university = university;
		this.#salary = salary;
		Teacher.#teacherCounter++;
	}

	static get teacherCounter() {
		return Teacher.#teacherCounter;
	}

	static set teacherCounter(teacherCounter) {
		Teacher.#teacherCounter = teacherCounter;
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

	get salary() {
		return this.#salary;
	}

	set salary(salary) {
		this.#salary = salary;
	}

	getInfo() {
		return (
			super.getInfo() +
			` Persons ID is: ${this.#id}, and the university is ${
				this.#university
			}. They get €${this.#salary} salary every month!`
		);
	}
}

module.exports = Teacher;
