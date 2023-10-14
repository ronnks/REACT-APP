import Classroom from "../models/classroom";
import StudentService from "../services/student_service";
import AssignmentGradeService from "../services/assignmentGrade_service";
import ClassroomService from "../services/classroom_service";

export function renderGradebook(classroom: Classroom) {
  return (
    <>
      <header>
        <h2>Gradebook</h2>
        <h4>
          {classroom.getName} with {classroom.getTeacher.getFullname()}
        </h4>
        <h4>Number of Assignments: {classroom.getAssignmentsList.length}</h4>
        <h4>
          Average Grade Percentage:{" "}
          {ClassroomService.calculateAvgGradePercentageInClassroom(classroom)}
        </h4>
      </header>
      {renderStudents(classroom)}
    </>
  );
}

// Given a list of students (classroom.students) render each student
export function renderStudents(classroom: Classroom) {
  let calcSOP: number;

  let getStudents = classroom.setStudentsList.map((student) => {
    calcSOP = StudentService.calculateStudentOverallGradePercentage(
      classroom,
      student.getId
    );

    <div>
      <li>
        <div>
          <strong>{student.getFullname()}</strong>
        </div>
        <div>
          Grade: {AssignmentGradeService.getLetterGrade(student.getId)} -{" "}
          {calcSOP} {AssignmentGradeService.isFailingGrade(calcSOP)}
        </div>
        <div>Assignment Scores:</div>
        {ClassroomService.renderAssignmentsGrades(student.getAssignmentGrades)}
      </li>
    </div>;
  });

  return (
    <>
      <ul className="studentList"></ul>
    </>
  );
}
