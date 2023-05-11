const Student = require("./student.js");
const Person = require("./person.js");
const Teacher = require("./teacher.js");
const fileSystem = require("fs");
// const Expert = require("./expert.js");

const testObjects = () => {
	const student = new Student(
		"Student",
		"Jonas",
		"Jonaitis",
		19,
		123123,
		"KTU"
	);
	const student2 = new Student(
		"Student",
		"Petras",
		"Petraitis",
		17,
		8949876,
		"KTU"
	);
	const person = new Person("Antanas", "Antanaitis", 50);
	const teacher = new Teacher(
		"Teacher",
		"Antanas",
		"Antanaitis",
		50,
		"KTU",
		123123,
		1500
	);
	console.log(student2.age);
	// fileSystem.readFile("./data.csv", "utf8");
};

const testStaticObjects = () => {
	console.log(Person.counter);
	const person1 = new Person("pirmas studenciokas");
	console.log(Person.counter);
	const person2 = new Person("antras studentas");
	console.log(Person.counter);
	const person3 = new Person("treciokas");
	console.log(Person.counter);
	console.log(person1.category);
	console.log(person2.category);
	console.log(person3.category);
};

(() => {
	testStaticObjects();

	testObjects();
})();
