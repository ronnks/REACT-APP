import Assignment from "./assignment";
import Student from "./student";
import Teacher from "./teacher";

// Class describes the classroom entity; properties & methds.
export default class Classroom {
  constructor(
    private name: string,
    private teacher: Teacher,
    private studentsList: Student[],
    private assignmentsList: Assignment[]
  ) {
    this.name = name;
    this.teacher = teacher;
    this.studentsList = studentsList;
    this.assignmentsList = assignmentsList;
  }

  set setName(newName: string) {
    this.name = newName;
  }

  set setTeacher(newTeacher: Teacher) {
    this.teacher = newTeacher;
  }

  set setStudentsList(newStudentsList: Student[]) {
    this.setStudentsList = newStudentsList;
  }

  set setAssignmentsList(newAssignmentsList: Assignment[]) {
    this.assignmentsList = newAssignmentsList;
  }

  get getName() {
    return this.name;
  }

  get getTeacher() {
    return this.teacher;
  }

  get getStudentsList() {
    return this.studentsList;
  }

  get getAssignmentsList() {
    return this.assignmentsList;
  }

  getClassroom() {
    return this;
  }

  toString() {
    return (
      "name: " +
      this.name +
      " teacher: " +
      this.teacher +
      " studentsList: " +
      this.studentsList +
      " assignmentsList: " +
      this.assignmentsList
    );
  }
}
