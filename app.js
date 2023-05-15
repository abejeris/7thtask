const Person = require("./person.js");
const Student = require("./student.js");
const Teacher = require("./teacher.js");
const fs = require("fs");
const csv = require("csv-parser");
const { Table } = require("console-table-printer");

const testObjects = () => {
	const students = [];
	const teachers = [];
	fs.createReadStream("data.csv")
		.pipe(csv())
		.on("data", (data) => {
			if (data.type === "Mokinys") {
				let student = new Student(
					data.type,
					data.name,
					data.lastName,
					data.age,
					data.id,
					data.university,
					data.createdAt
				);
				students.push(student);
			} else {
				let teacher = new Teacher(
					data.type,
					data.name,
					data.lastName,
					data.age,
					data.id,
					data.university,
					data.salary,
					data.createdAt
				);
				teachers.push(teacher);
			}
		})
		.on("end", () => {
			const studentTable = new Table({
				title: "STUDENTS",
			});

			for (let student of students) {
				studentTable.addRow(
					{
						NAME: student.name,
						LASTNAME: student.lastName,
						AGE: student.age,
						ID: student.id,
						UNIVERSITY: student.university,
						CREATED_AT: student.createdAt,
					},
					{ color: "blue" }
				);
			}
			studentTable.printTable();

			const teacherTable = new Table({
				title: "TEACHERS",
			});

			for (let teacher of teachers) {
				teacherTable.addRow(
					{
						NAME: teacher.name,
						LASTNAME: teacher.lastName,
						AGE: teacher.age,
						ID: teacher.id,
						UNIVERSITY: teacher.university,
						SALARY: teacher.salary,
						CREATED_AT: teacher.createdAt,
					},
					{ color: "yellow" }
				);
			}
			teacherTable.printTable();
			console.log(
				`There are total ${Person.counter} people in this log, out of which ${Student.studentCounter} are students and ${Teacher.teacherCounter} teachers.`
			);
			console.log(
				`As an example to test the getInfo method: ${students[2].getInfo()}`
			);
			console.log(
				`Also the same example for teacher's method: ${teachers[3].getInfo()}`
			);
		});
};

(() => {
	testObjects();
})();
