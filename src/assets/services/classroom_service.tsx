
// File applies service functionality from the classroom class. 
import StudentList from "../models/model_lists/studentList";
import Classroom from "../models/classroom";
import StudentService from "./student_service";

export default function calculateAvgGradePercentageInClassroom(classroom: Classroom, studentArray: StudentList) {
    let getAGP = 0; // getTS -> get the average grade percentage; Gets the average grade percentage in classroom
    let counter = 0;
    studentArray.forEach(student => {
      counter++;
      getAGP += StudentService.calculateStudentOverallGradePercentage(classroom, student.getId);
    }
    );
    return (getAGP /= counter).toFixed();
  }