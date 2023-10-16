import Assignment from "../assignment";
import Classroom from "../classroom";
import AssignmentGrade from "../assignmentGrade";
import StudentList from "../model_lists/studentList";

// Class describes the Assignment array functionality.
export default class AssignmentList extends Array<Assignment> {
  // Add an assignment
  static addAssignment(
    classroom: Classroom,
    name: string,
    pointsPossible: number
  ) {
    let lastAssignmentId =
      classroom.getAssignmentsList[
        classroom.getAssignmentsList.length - 1
      ].getId.split("-");

    let id = lastAssignmentId[0] + "-" + Number(lastAssignmentId[1]) + 1;
    let assignment = new Assignment(id, name, pointsPossible);

    // Give each student a random score for this assignment
    for (let student of classroom.getStudentsList) {
      student.getAssignmentGrades.push(
        new AssignmentGrade(
          assignment.getId,
          StudentList.getRandomScore(assignment.getPP)
        )
      );
    }

    classroom.getAssignmentsList.push(assignment);
  }
}
