import AssignmentGrade from "../models/assignmentGrade";
import Classroom from "../models/classroom";

// Class applies calculation functionality from the assignmentGrade class.
export default class AssignmentGradeService {
  private constructor() {}
  // Given a number of points and a total possible number of points, this will return the grade percentage
  // From 0 - 100
  static getGradePercentage(points: number, totalPossiblePoints: number) {
    return Math.round((points / totalPossiblePoints) * 100);
  }

  // Given a grade Percentage, this will return true of false if that is a failing grade
  static isFailingGrade(gradePercentage: number) {
    // A failing grade is less than 70 %
    let failingGrade =
      gradePercentage < 60
        ? `<span class="warning"></span>`
        : gradePercentage < 80
        ? `<span class="fair"></span>`
        : `<span class="success"></span>`;
    return failingGrade;
  }

  // Given a grade percentage, this will return a letter grade: A, B, C, D, or F
  static getLetterGrade(gradePercentage: number) {
    if (gradePercentage > 89) {
      return "A";
    } else if (gradePercentage > 79) {
      return "B";
    } else if (gradePercentage > 69) {
      return "C";
    } else if (gradePercentage > 59) {
      return "D";
    } else {
      return "F";
    }
  }

  // Given a maximum score, this will return a random integer between 0 and that number
  // (This is used down below in the addStudent and addAssignment code)
  static getRandomScore(maxScore: number) {
    return Math.round(Math.random() * maxScore);
  }

  // Given an assignment ID (in the form of the parameter assignmentId), return the corresponding assignment's object
  //Returns an assignment.
  static getAssignment(classroom: Classroom, assignmentId: string) {
    let getAssignment = new AssignmentGrade("", 0); // Sets initial value of assignment object, But will retrieve
    //the filtered out assignment by assignmentID.
    classroom.getStudentsList.forEach((student) => {
      //Iterating through each student.
      student.getAssignmentGrades.forEach((assignment) => {
        if (assignment.getAssignmentId === assignmentId) {
          getAssignment = assignment;
        }
      });
    });
    return getAssignment;
  }
}
