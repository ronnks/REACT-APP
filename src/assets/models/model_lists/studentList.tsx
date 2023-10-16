import Student from "../student";
import Classroom from "../classroom";
import AssignmentGrade from "../assignmentGrade";

// Class describes the student array functionality.
export default class StudentList extends Array<Student> {
  //Returns a student.
  static getStudent(studentArray: StudentList, studentId: number) {
    let getStudentVar: Student = new Student(1, "", "", []); // Setting a default fake student.
    studentArray.forEach((student) => {
      //Iterating through each student.
      if (student.getId === studentId) {
        getStudentVar = student;
      }
    });
    return getStudentVar;
  }

  // Given a student id (in the form of the parameter studentId), add together their score for every assignment
  //Adds the student total points.
  static studentTotalPoints(studentArray: StudentList, studentId: number) {
    let sumOSTP = 0; // sumOSTP -> sum of student total points; Gets total score for every assignment
    this.getStudent(studentArray, studentId).getAssignmentGrades.forEach(
      (group) => {
        sumOSTP += group.getScore;
      }
    );
    return sumOSTP;
  }

  // Given a maximum score, this will return a random integer between 0 and that number
  // (This is used down below in the addStudent and addAssignment code)
  static getRandomScore(maxScore: number) {
    return Math.round(Math.random() * maxScore);
  }

  // Adding a student and assignment
  static addStudent(classroom: Classroom, firstName: string, lastName: string) {
    let lastStudentId =
      classroom.getStudentsList[classroom.getStudentsList.length - 1].getId;

    let student = new Student(lastStudentId + 1, firstName, lastName, []);

    // Give the student a random score for each assighnment
    classroom.getStudentsList.forEach((student) => {
      student.getAssignmentGrades.forEach((assignmentGrade) => {
        student.getAssignmentGrades.push(
          new AssignmentGrade(
            assignmentGrade.getAssignmentId,
            this.getRandomScore(assignmentGrade.getScore)
          )
        );
      });
    });
    classroom.getStudentsList.push(student);
  }
}

let student1 = new Student(1, "John", "Paul", []);
let student2 = new Student(2, "Mike", "Jordan", []);
let studentsList = new StudentList();
studentsList.push(student1);
studentsList.push(student2);
