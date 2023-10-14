import Student from "../student";

// Class describes the student array functionality.
export default class StudentList extends Array<Student>{
    //Returns a student.
    static getStudent(studentArray: StudentList, studentId: number) {
        let getStudentVar: Student = new Student(1,"","",[]); // Setting a default fake student.
        studentArray.forEach(student => {  //Iterating through each student.
            if(student.getId === studentId){
                getStudentVar = student;
            }
        }
        );
        return getStudentVar;
    }

    // Given a student id (in the form of the parameter studentId), add together their score for every assignment
    //Adds the student total points.
    static studentTotalPoints(studentArray: StudentList, studentId: number) {
        let sumOSTP = 0 // sumOSTP -> sum of student total points; Gets total score for every assignment
        this.getStudent(studentArray, studentId).getAssignmentGrades.forEach(group => {
            sumOSTP += group.getScore;
        });
        return sumOSTP;
    }
}

let student1 = new Student(1, "John", "Paul", []);
let student2 = new Student(2, "Mike", "Jordan", []);
let studentsList = new StudentList();
studentsList.push(student1);
studentsList.push(student2);