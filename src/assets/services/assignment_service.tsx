import Classroom from "../models/classroom";

// Class applies service functionality from the assignment class.
export default class AssignmentService {
  private constructor() {}
  // The pointsPossible for an assignment and return that number.
  static totalPossiblePoints(classroom: Classroom, assignmentId: string) {
    let getPoints = 0;
    classroom.getAssignmentsList.forEach((assignment) => {
      if (assignment.getId === assignmentId) {
        getPoints = assignment.getPP;
      }
    });
    return getPoints;
  }

  //Returns the total possible points for all assignments.
  static getTotalPossiblePoints(classroom: Classroom) {
    let TPP = 0; //sumOTPP -> sum of total possible points; Gets thethe total possible points.
    classroom.getAssignmentsList.forEach((assignment) => {
      TPP += assignment.getPP;
    });
    return TPP;
  }
}
