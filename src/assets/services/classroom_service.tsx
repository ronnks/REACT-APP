// File applies service functionality from the classroom class. \
import Classroom from "../models/classroom";
import StudentService from "./student_service";
import AssignmentService from "../services/assignment_service";

// Class applies service functionality from the Classroom class.
export default class ClassroomService {
  static calculateAvgGradePercentageInClassroom(classroom: Classroom) {
    let getAGP = 0; // getTS -> get the average grade percentage; Gets the average grade percentage in classroom
    let counter = 0;
    classroom.getStudentsList.forEach((student) => {
      counter++;
      getAGP += StudentService.calculateStudentOverallGradePercentage(
        classroom,
        student.getId
      );
    });
    return (getAGP /= counter).toFixed();
  }

  // Given a list of assignment grades (student.assignmentGrades) render each assignments and the score
  static renderAssignmentsGrades(classroom: Classroom) {
    let item: JSX.Element = <></>;

    classroom.getStudentsList.forEach((student) => {
      student.getAssignmentGrades.forEach((assignmentGrade) => {
        item = (
          <li>
            {assignmentGrade.getAssignmentId} - {assignmentGrade.getScore}/
            {AssignmentService.totalPossiblePoints(
              classroom,
              assignmentGrade.getAssignmentId
            )}
          </li>
        );
      });
    });

    return (
      <>
        <ul>{item}</ul>
      </>
    );
  }
}
