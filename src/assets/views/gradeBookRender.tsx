import Classroom from "../models/classroom";
import calculateAvgGradePercentageInClassroom from "../services/classroom_service";

export default function renderGradebook(classroom: Classroom) {
    return (
        <>
        <header>
            <h2>Gradebook</h2>
            <h4>{classroom.getName} with {classroom.getTeacher.getFullname()}</h4>
            <h4>Number of Assignments: {classroom.getAssignmentsList.length}</h4>
            <h4>Average Grade Percentage: {calculateAvgGradePercentageInClassroom(classroom.getStudentsList)}</h4>
        </header>
        {renderStudents(classroom.getStudentsList)}
        </>
    );
}

// Given a list of students (classroom.students) render each student
export default function renderStudents(students: StudentList) {

    let html: JSX.Element = <ul className="studentList">;
    html += <div className="studentListTitle">Students</div>;
  
    for (let student of students) {
      // Hint: Only render the <span class="warning"></span> if the student's overall grade isFailingGrade().  A ternary would be great here...
  
      let calcSOP = calculateStudentOverallGradePercentage(student.id);
      html += 
        <li>
          <div><strong>{students.} {student.lastName}</strong></div>
          <div>Grade: {getLetterGrade(student.id)} - {calcSOP}  {isFailingGrade(calcSOP)}</div>
          <div>Assignment Scores:</div>
          {renderAssignmentsGrades(student.assignmentGrades)}
        </li>
        ;
    }
  
    html += </ul>;
    return html;
}