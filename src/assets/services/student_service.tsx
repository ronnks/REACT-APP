import Classroom from "../models/classroom";
import StudentList from "../models/model_lists/studentList";
import assignmentService from "./assignment_service";

// Class applies service functionality from the Student class. 
export default class StudentService {
    private constructor(){}

    // Given a number of points and a total possible number of points, this will return the grade percentage
    // From 0 - 100
    static getGradePercentage(points: number, totalPossiblePoints: number) {
        return Math.round((points / totalPossiblePoints) * 100);
    }

    static calculateStudentOverallGradePercentage(classroom: Classroom, studentId: number){
        return this.getGradePercentage(StudentList.studentTotalPoints(classroom.getStudentsList, studentId), assignmentService.getTotalPossiblePoints(classroom));
    }

}

