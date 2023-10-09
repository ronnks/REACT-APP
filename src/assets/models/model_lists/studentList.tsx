import Student from "../student";

// Class describes the student array functionality.
export default class StudentList extends Array<Student>{
}

let student1 = new Student(1, "John", "Paul", []);
let student2 = new Student(2, "Mike", "Jordan", []);
let studentsList = new StudentList();
studentsList.push(student1);
studentsList.push(student2);