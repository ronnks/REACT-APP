import { useState } from "react";
import { renderGradebook } from "../assets/views/gradeBookRender";
import StudentList from "../assets/models/model_lists/studentList";
import Classroom from "../assets/models/classroom";
import Teacher from "../assets/models/teacher";
import { TeacherTitle } from "../assets/models/model_lists/enums/teacher_title_enum";

// Function: For retrieving data from student submit form.
export default function addStudentForm() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  return (
    <>
      <form>
        <h4>Add a Student</h4>
        <section>
          <label>First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
          />
        </section>
        <section>
          <label>Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
          />
        </section>
        <button
          onClick={() => {
            if (firstName && lastName) {
              StudentList.addStudent(
                new Classroom(
                  "",
                  new Teacher(TeacherTitle.MISS, "", ""),
                  [],
                  []
                ),
                firstName,
                lastName
              );
              renderGradebook(
                new Classroom(
                  "",
                  new Teacher(TeacherTitle.MISS, "", ""),
                  [],
                  []
                )
              );
              firstName = "";
              lastName = "";
            }
          }}
        >
          Add Student
        </button>
      </form>
    </>
  );
}
